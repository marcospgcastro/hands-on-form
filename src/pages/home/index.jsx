import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight,Limiter, Row, Column, TextContent } from './styles';

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
          <Row>  
            <Column>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores profissionais.
                </TextContent>
                <Limiter>
                    <Button title="Comece agora!" variant="secondary" onClick={handleClickSignIn}/>
                </Limiter>
            </Column>

            <Column>
                <img src={bannerImage} alt="Imagem principal do site." />
            </Column>

          </Row>  
        </Container>
    </>)
}

export { Home }