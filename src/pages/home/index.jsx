import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight,Limiter, TextContent } from './styles';

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
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
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }