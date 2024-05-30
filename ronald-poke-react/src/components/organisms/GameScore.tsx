import { useContext, useEffect } from "react"
import { GeneralContext } from "../../modules/Context/GeneralContext"

function GameScore() {
  const { gameScore,setGameScore, pokemonChoosenGame,setPokemonImageClass,pokemonsRandomFour,oneRandomNumber } = useContext(GeneralContext)
  // useEffect(()=>{
  //   if(pokemonChoosenGame == pokemonsRandomFour[oneRandomNumber]?.id){
  //     setGameScore(gameScore+1)
  //     // setPokemonImageClass('game-imagepokemon')
  //     // setTimeout(()=>{
  //     //   setPokemonImageClass('game-imagepokemon-shadow')
  //     // },"1000")
  //   } 
  // },pokemonChoosenGame)
  return (
    <div>
        {gameScore}
    </div>
  )
}

export default GameScore