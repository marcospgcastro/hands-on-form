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
      return await api.post('users',`nome=${formData.nome}&email=${formData.email}&senha=${formData.senha}`);
    } catch(erro) {
      alert('Cadastro de novo usuário não realizado')
      console.error(erro)
    } finally {
      alert(`Usuário ${formData.nome} cadastrado com sucesso!`)
    } 
  };

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
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    {errors.nome && <span>Nome é obrigatório</span>}

                    <Input placeholder="Seu melhor e-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}

                    <Input type="password" placeholder="Uma boa senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <Row>
                      <Button title="Entrar" variant="secondary" type="submit"/>
                    </Row>
                </form>
                <InformeText >
                  Ao clicar em "Criar conta grátis", declaro que aceito as Política de Privacidade e os Termos da Dio.
                </InformeText>
                <TheCalling>
                  Já tenho conta. <LoginText onClick={handleClickLogin}>Fazer Login</LoginText>
                </TheCalling>
              </Wrapper>
          </Column>
      </Container>
    </>
  )
}

export { AddUser }; 