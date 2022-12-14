import styled from "styled-components";

export const HomeContainer = styled.div`
  z-index: ${props => props.zIndex || "1"};
  position: ${props => props.position || "relative"};
  top: ${props => props.top || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  opacity: 0;
  background-color: ${props => props.bg || "transparent"};
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const LoginContainer = styled.div`
  z-index: ${props => props.zIndex || "1"};
  position: ${props => props.position || "relative"};
  top: ${props => props.top || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  padding: 0 1em;
  opacity: 0;
  background-color: ${props => props.bg || "transparent"};
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const ErrorContainer = styled.div`
  z-index: ${props => props.zIndex || "1"};
  position: ${props => props.position || "relative"};
  top: ${props => props.top || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  padding: ${props => props.pad || "calc(var(--header-h) + 1em) 0.75em 1.5em 0.75em"};
  opacity: 0;
  background-color: ${props => props.bg || "transparent"};
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const NotificationContainer = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: var(--header-h);
  padding: 0.5em 1em;
  color: var(--color-w);
  background-color: ${modal => modal.bg || "var(--color-2b)"};
  box-shadow: var(--shadow);
  transform: translateY(100%);
  transition: var(--transition-fast);
`
export const LoadingContainer = styled.div`
  z-index: 4;
  position: fixed;
  top: ${props => props.top || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.jc || 'center'};
  width: 100%;
  height: 100%;
  min-height: ${props => props.minH || "100vh"};
  padding: 2em;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.95);
  animation: fadeIn 0.4s ease-in-out forwards normal;
  @keyframes fadeIn {to {opacity: 1;}}
`
export const Div = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: ${props => props.fw || "nowrap"};
  flex-direction: ${props => props.fd || 'column'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || '0'};
  width: 100%;
  max-width: ${props => props.maxW || "32em"};
  height: 100%;
  min-height: ${props => props.minH || "100%"};
  margin: ${props => props.mar || "0"};
  padding: ${props => props.pad || "2em"};
  color: var(--color-w);
  background-color: ${props => props.bg || "transparent"};
  border-radius: ${props => props.br || "var(--radius)"};
  overflow: hidden;
  box-shadow: ${props => props.bs || "none"};
`
export const Nav = styled.nav`
z-index: 2;
position: fixed;
top: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 4em;
padding: 0.5em;
opacity: 0;
text-align: center;
line-height: 1.5em;
color: var(--color-w);
background-color: rgba(17, 21, 29, 0.5);
backdrop-filter: blur(0.75em);
border-bottom: solid 0.15em var(--color-1b);
box-shadow: var(--shadow);
animation: fadeIn 1s ease-in-out forwards;
@keyframes fadeIn {to {opacity: 1;}}
div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  width: min(68vw, 240px);
  height: 100%;
  img {
    cursor: pointer;
    width: 100%;
  }
}  
`