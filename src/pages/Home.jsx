import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Router";
import { HomeContainer, Div } from "../styles/containers"
import { Title1, Title2, Title3, ButtonLine, TextM, TextG } from "../styles/elements.jsx"

export const Home = () => {
  const navigate = useNavigate();
  
  return (
    <HomeContainer>
      <Div pad="0.5em">
        <Title1>O HÍPERESPAÇO ESTÁ</Title1>
        <Title2>ESPERANDO</Title2>
        <Title3>POR VOCÊ</Title3>
      </Div>
      <Div fd="row" pad="0.5em 2em">
        {window.localStorage.getItem("labexTkn") === null ? (
          <ButtonLine onClick={() => goToLogin(navigate)}>
            <TextM>FAZER</TextM>
            <TextG>LOGIN</TextG>
          </ButtonLine>
        ) : (
          <ButtonLine onClick={() => goToLogin(navigate)}>
            <TextM>ACESSAR O</TextM>
            <TextG>PAINEL</TextG>
          </ButtonLine>
        )}
      </Div>
    </HomeContainer>
  )
}