import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={75}
            name="Matheus"
            image="https://avatars.githubusercontent.com/u/101181100?v=4"
          />
          <UserInfo
            percentual={75}
            name="Matheus"
            image="https://avatars.githubusercontent.com/u/101181100?v=4"
          />
          <UserInfo
            percentual={75}
            name="Matheus"
            image="https://avatars.githubusercontent.com/u/101181100?v=4"
          />
          <UserInfo
            percentual={75}
            name="Matheus"
            image="https://avatars.githubusercontent.com/u/101181100?v=4"
          />
          <UserInfo
            percentual={75}
            name="Matheus"
            image="https://avatars.githubusercontent.com/u/101181100?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
