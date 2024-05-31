import { useState } from "react";
import { GeneralContext } from "./GeneralContext";

export const GeneralProvider = ({ children }) => {
	const [gameScore, setGameScore] = useState(0)
  	const [isRoundFinished, setIsRoundFinished] = useState(false)
	const [pokemonImageClass, setPokemonImageClass] = useState('game-imagepokemon-shadow')
	const [attempStatus, setAttempStatus] = useState({isFinished:false,didWin:false})
	const [pokemonChoosenGame, setPokemonChoosenGame] = useState(null)
	const [pokemonsRandomFour, setPokemonsRandomFour] = useState([])
	const [oneRandomNumber, setOneRandomNumber] = useState(null)
	const [isGameStarted, setIsGameStarted] = useState(false)
	const [attemptsGame, setAttemptsGame] = useState(0)
	const [languagesAvailable, setLanguagesAvailable] = useState(["en","ja"])
	const [allLanguages, setAllLanguages] = useState(['fr','de','es','it','zh-Hans','ko'])
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
				isGameStarted, setIsGameStarted,
				attemptsGame, setAttemptsGame,
				languagesAvailable, setLanguagesAvailable,
				allLanguages, setAllLanguages
			}}
		>
      { children }
    </GeneralContext.Provider>
  )
}