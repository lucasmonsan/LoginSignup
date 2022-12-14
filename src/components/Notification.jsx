import { useEffect } from "react";
import { NotificationContainer } from "../styles/containers"
import { TextP, TextM } from "../styles/elements";

export const Notification = ({modal, setModal}) => {
  useEffect(() => {
    document.querySelector("#Modal").style.transform = "translateY(0)"
    setTimeout(() => {
      document.querySelector("#Modal").style.transform = "translateY(100%)"
      setTimeout(() => {
        setModal({})
      }, 300)
    }, 4000)
  }, [modal.trigger])
  return (
    modal.type === "success" && (
      <NotificationContainer bg="var(--color-yes)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </NotificationContainer>
    ) ||
    modal.type === "error" && (
      <NotificationContainer bg="var(--color-no)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </NotificationContainer>
    ) ||
    modal.type === "info" && (
      <NotificationContainer bg="var(--color-1a)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </NotificationContainer>
    )
  )
}