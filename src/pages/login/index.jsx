import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, EntrarBottom, Wrapper } from './styles';

const schema = yup.object({
        email: yup.string().email('O e-mail inserido não consta como usuário!').required(),
        password: yup.number().required(),
    }).required();

const Login = () => {

    const navigate = useNavigate()
    const handleClickAddUser = () => {
      navigate('/cadastro')
    }
    const handleClickRescue = () => {
        alert('Entre em contato com nossa equipe por: suporte@email.com')
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
 
    //console.log(errors, isValid)
    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
            console.log(data);

            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Já se cadastrou?</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" control={control} />
                    <EntrarBottom>
                        <Button title="Entrar" variant="secondary" type="submit"/>    
                    </EntrarBottom> 
                </form>                         
                <Row>
                    <EsqueciText onClick={handleClickRescue}>Recuperar senha</EsqueciText>
                    <CriarText onClick={handleClickAddUser}>Criar conta</CriarText>
                </Row>
                
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }