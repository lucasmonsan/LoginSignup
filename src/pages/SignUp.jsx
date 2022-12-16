import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginContainer, Div } from "../styles/containers";
import { Grayout, TextM, TextG, Form, Input, Br, ButtonFill } from "../styles/elements";
import { Notification } from "../components/Notification";
import { Loading } from "../components/Loading";

export const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""});
  
  const goToHome = () => navigate("/");
  
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const savedEmail = JSON.parse(localStorage.getItem(email));
    console.log(savedEmail)
    
    setTimeout(() => {
      setLoading(false);
      
      if (savedEmail) {
        setModal({trigger: true, type: "error", title: "Cadastro negado!", text: "O email digitado já existe!"})
      } else {
        const data = [{name:fullName,email:email,password:password}];
        localStorage.setItem(email,JSON.stringify(data));
        setModal({trigger: true, type: "success", title: "Conta criada com sucesso!", text: "Voltando para a página inicial..."})        
        setTimeout(() => goToHome(),1500);
      }      
    },1500);
  }
  
  return (
    <LoginContainer>
      <Grayout/>
        <Div pad="2em 0 0.25em 0" bg="var(--color-2a)">
          <TextG color="var(--color-w)">FAÇA SEU CADASTRO</TextG>
          <Form action="" onSubmit={handleSignUp}>
            <Div pad="1.25em">
              <Input type="text" placeholder="Nome completo" name="name" value={fullName} onChange={e => setFullName(e.target.value)} required/>
              <Input type="email" placeholder="E-mail" name="email" value={email} onChange={e => setEmail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="E-mail inválido!"/>
              <Input type="password" placeholder="Senha" name="password" value={password} onChange={e => setPassword(e.target.value)} required pattern="[a-zA-Z0-9]{8,}" title="A senha deve ter no mínimo 8 caracteres"/>
              <Br />
              <ButtonFill>
                <TextM>FINALIZAR</TextM>
              </ButtonFill>
            </Div>
          </Form>
        </Div>       
        {modal.trigger && <Notification modal={modal} setModal={setModal} />}
      
      {loading && <Loading />}
    </LoginContainer>
  )
}