import styled from "styled-components"

export const Title1 = styled.b`
  font-size: min(8.95vw, 3.25rem);
  line-height: min(12vw, 4.5rem);
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
`
export const Title2 = styled.b`
  font-size: min(16vw, 5.8rem);
  line-height: min(12vw, 4rem);
  color: transparent;
  -webkit-text-stroke: 0.025em var(--color-w);
`
export const Title3 = styled.b`
  font-size: min(19.55vw, 7.1rem);
  line-height: min(21vw, 8rem);
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
`

export const ButtonLine = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.w || '100%'};
  min-height: ${props => props.minH || '100%'};
  margin: 0 0.5em;
  padding: 0.5em 0.25em;
  color: var(--color-w);
  background-color: transparent;
  border: solid 0.15em var(--color-w);
  border-radius: ${props => props.br || "var(--radius)"};
  box-shadow: var(--shadow);
  transition: var(--transition-fast);
  &:hover {
    background-color: var(--color-w);
    color: var(--color-1a);
    box-shadow: var(--shadow);
  }
`
export const ButtonFill = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.w || "100%"};
  height: ${props => props.h || "100%"};
  min-height: ${props => props.minH || "4.5em"};
  margin: ${props => props.margin || "0 0.75em"};
  padding: ${props => props.pad || "0.5em"};
  color: var(--color-w);
  background-color: ${props => props.bg || "var(--color-1b)"};
  border: none;
  border-radius: ${props => props.br || "var(--radius)"};
  transition: var(--transition-fast);
  &:hover {
    background-color: ${props => props.bgH || "var(--color-1a)"};
    border-color: var(--color-1a);
    box-shadow: ${props => props.bsH || "var(--shadow)"};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: var(--color-1a);
    box-shadow: none;
  }
`

export const TextP = styled.b`
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(4vw, 1rem);
  line-height: min(4vw, 1rem);
  color: ${props => props.color || "inherit"};
`
export const TextM = styled.b`
  z-index: 2;
  width: 100%;
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(5vw, 1.5rem);
  line-height: min(5vw, 1.75rem);
  color: ${props => props.color || "inherit"};
`
export const TextG = styled.b`
  z-index: 2;
  width: 100%;
  min-height: ${props => props.minH || "100%"};
  padding: ${props => props.pad || "0"};
  font-size: min(8vw, 3rem);
  line-height: min(8vw, 2.5rem);
  color: ${props => props.color || "inherit"};
  background-color: ${props => props.bg || "transparent"};
`

export const Grayout = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 150vh;
  background-color: rgba(17, 21, 29, 0.9);
  opacity: ${props => props.opacity || "0"};
  animation: fadeIn 0.25s ease-in-out forwards;
  @keyframes fadeIn {to {opacity: 1;}}
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  margin-bottom: 0.75em;
  padding: 0 0.25em;
  font-size: min(7vw, 1.5rem);
  font-weight: 600;
  text-align: center;
  color: var(--color-w);
  background-color: var(--color-2b);
  border: solid 0.1em var(--color-2b);
  border-radius: 0.5em;
  outline: none;
  opacity: 1;
  transition: var(--transition-fast);
  &:focus {
    border: solid 0.1em var(--color-1a);
  }
`

export const Br = styled.div`
  padding: ${props => props.pad || "0.5em"};
`