import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, InformeText, Row, LoginText, TheCalling, Wrapper } from './styles';

const AddUser = () => {

  const navigate = useNavigate()
  const handleClickLogin = () => {
    navigate('/login')
  }

  const { control, handleSubmit, formState: { errors  } } = useForm({
      reValidateMode: 'onChange',
      mode: 'onChange',
  });

  const onSubmit = async (formData) => {
      try{
          const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
          
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

  return (<>
      <Header />
      <Container>
          <Column>
              <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
               e entrar mais rápido nas empresas mais desejadas.</Title>
          </Column>
          <Column>
              <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    {errors.email && <span>Nome é obrigatório</span>}

                    <Input placeholder="Seu melhor e-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}

                    <Input type="password" placeholder="Uma boa senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatória</span>}
                </form>
                <Row>
                  <Button title="Entrar" variant="secondary" type="submit"/>
                </Row>
                <InformeText >
                  Ao clicar em "Criar conta grátis", declaro que aceito as Política de Privacidade e os Termos da Dio.
                </InformeText>
                <TheCalling>
                  Já tenho conta. <LoginText onClick={handleClickLogin}>Fazer Login</LoginText>
                </TheCalling>
              </Wrapper>
          </Column>
      </Container>
  </>)
}

export { AddUser }; 