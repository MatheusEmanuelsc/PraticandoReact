import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import capa from "../../assets/capa.jpg";
export function Card() {
  return (
    <CardContainer>
      <ImageBackground src={capa} />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/101181100?v=4" />
          <div>
            <h4>Matheus</h4>
            <p>Há 5 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto React</h4>
          <p>Projeto feito no Curso react</p>
        </PostInfo>
        <HasInfo>
          <h4>#React</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
