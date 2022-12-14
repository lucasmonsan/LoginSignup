import { Player } from '@lottiefiles/react-lottie-player';
import { LoadingContainer} from "../styles/containers"

export const Loading = () => {
  return (
    <LoadingContainer>
      <Player
        autoplay={true}
        loop={true}
        src="https://assets4.lottiefiles.com/packages/lf20_MY18LdeBcf.json"
        style={{ height: "50vh", transition: "all 0.25s" }}
      />
    </LoadingContainer>
  )
}