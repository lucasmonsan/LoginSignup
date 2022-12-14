import { useNavigate } from "react-router-dom";
import { goToHome } from "../Router";
import { Nav } from "../styles/containers";
import { TextM } from "../styles/elements"; 
import logo from "../assets/logo.png";

export const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("labexTkn");
    goToHome(navigate);
  }

  return (
    <Nav>
      <div>
        <img src={logo} alt="logo" onClick={() => goToHome(navigate)} />
      </div>
      
      {window.localStorage.getItem("labexTkn") &&
        <div style={{width:"fit-content"}}>
          <TextM style={{cursor: "pointer"}} onClick={() => logout()}>LOGOUT</TextM>
        </div>
      }
    </Nav>
  )
}