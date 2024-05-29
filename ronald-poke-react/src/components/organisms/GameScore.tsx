import { useContext } from "react"
import { GeneralContext } from "../../modules/Context/GeneralContext"

function GameScore() {
  const { gameScore, isRoundFinished, setIsRoundFinished } = useContext(GeneralContext)
  const handleNewRound = () => {
    setIsRoundFinished(false)
  }
  return (
    <div>
        {gameScore}
        {
          isRoundFinished &&
          <div>
            <button onClick={handleNewRound}>New Round</button>
          </div>
        }
    </div>
  )
}

export default GameScore