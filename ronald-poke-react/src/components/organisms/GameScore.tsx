import { useContext, useEffect } from "react"
import { GeneralContext } from "../../modules/Context/GeneralContext"
import "../../styles/gameScore.css"
function GameScore() {
  const { gameScore,attemptsGame } = useContext(GeneralContext)
  
  return (
    <div className="game-score-container">
        <div className="game-score">
          <div>Points:</div> 
          <div>{gameScore} / 4</div>
        </div>
        <div className="game-score">
          <div>Attempts:</div>
          <div>{attemptsGame} / 4</div>
        </div>
    </div>
  )
}

export default GameScore