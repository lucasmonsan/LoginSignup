import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginContainer, Div } from "../styles/containers";
import { Grayout, TextM, TextG, Form, Input, Br, ButtonFill } from "../styles/elements";
import { Notification } from "../components/Notification";
import { Loading } from "../components/Loading";

export const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""});
  
  const goToHome = () => navigate("/");
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);    
    const savedEmail = JSON.parse(localStorage.getItem(email));
    
    setTimeout(() => {
      setLoading(false);
      
      if (savedEmail && savedEmail[0].password === password) {        
        setModal({trigger: true, type: "success", title: "Login autorizado!", text: "Entrando no foguete..."});     
        setTimeout(() => {
          localStorage.setItem("labexTkn", savedEmail[0].name);
          goToHome();
        },1500);
      } else {
        setModal({trigger: true, type: "error", title: "Login negado!", text: "Email ou senha incorretos!"});
      }      
    },1500);
  }
  
  return (
    <LoginContainer>
      <Grayout/>
      {window.localStorage.getItem("labexTkn") === null ? (
        <Div pad="2em 0 0.25em 0" bg="var(--color-2a)">
          <TextG color="var(--color-w)">FAÇA SEU LOGIN</TextG>
          <Form action="" onSubmit={handleLogin}>
            <Div pad="1.25em">
              <Input type="email" placeholder="E-mail" name="email" value={email} onChange={e => setEmail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="E-mail inválido!"/>
              <Input type="password" placeholder="Senha" name="password" value={password} onChange={e => setPassword(e.target.value)} required pattern="[a-zA-Z0-9]{8,}" title="A senha deve ter no mínimo 8 caracteres"/>
              <Br />
              <ButtonFill>
                <TextM>ENTRAR</TextM>
              </ButtonFill>
            </Div>
          </Form>
        </Div>
      ) : (
        <Div pad="2em 1em" bg="var(--color-2a)">
          <TextG color="var(--color-w)">{window.localStorage.getItem("labexTkn")}</TextG>
          <Br />
          <TextM color="var(--color-w)">Seja bem vindo(a)!</TextM>                
        </Div>
      )}        
      {modal.trigger && <Notification modal={modal} setModal={setModal} />}      
      {loading && <Loading />}
    </LoginContainer>
  )
}