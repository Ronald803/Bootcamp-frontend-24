import { useState } from "react";
import { GeneralContext } from "./GeneralContext";

export const GeneralProvider = ({ children }) => {
	const [gameScore, setGameScore] = useState(-1)
  	const [isRoundFinished, setIsRoundFinished] = useState(false)
	const [pokemonImageClass, setPokemonImageClass] = useState('game-imagepokemon-shadow')
	const [attempStatus, setAttempStatus] = useState({isFinished:false,didWin:false})
	const [pokemonChoosenGame, setPokemonChoosenGame] = useState(null)
	const [pokemonsRandomFour, setPokemonsRandomFour] = useState([])
	const [oneRandomNumber, setOneRandomNumber] = useState(null)
	const [isGameStarted, setIsGameStarted] = useState(false)
	return (
    <GeneralContext.Provider
			value={{
				gameScore,setGameScore,
				isRoundFinished,setIsRoundFinished,
				pokemonImageClass,setPokemonImageClass,
				attempStatus,setAttempStatus,
				pokemonChoosenGame, setPokemonChoosenGame,
				pokemonsRandomFour, setPokemonsRandomFour,
				oneRandomNumber, setOneRandomNumber,
				isGameStarted, setIsGameStarted
			}}
		>
      { children }
    </GeneralContext.Provider>
  )
}