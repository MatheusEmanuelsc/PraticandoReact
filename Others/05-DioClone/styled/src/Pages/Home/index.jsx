import { Header } from "../../components/Header/index.jsx";
import { Container, TextContent, Title, TitleHighlight } from "./styles.js";
import banner from "../../assets/banner.svg";
import { Button } from "../../components/Button/index.jsx";
export function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title={"Começar agora"} variant="secondary" onClick={null} />
        </div>
        <div>
          <img src={banner} alt="banner " />
        </div>
      </Container>
    </>
  );
}
