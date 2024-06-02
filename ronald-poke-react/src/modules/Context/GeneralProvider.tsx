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
	const [languagesAvailable, setLanguagesAvailable] = useState(languagesAvailableDetails)
	const [allLanguages, setAllLanguages] = useState(allLanguagesDetails)
	const [languageChoosen, setLanguageChoosen] = useState('en')
	const [pokemonsNames, setPokemonsNames] = useState([])
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
				allLanguages, setAllLanguages,
				languageChoosen, setLanguageChoosen,
				pokemonsNames, setPokemonsNames
			}}
		>
      { children }
    </GeneralContext.Provider>
  )
}

const languagesAvailableDetails = [
	{	
		name: 'en',
		flagImg: '/flags/en.jpg'
	},
	{
		name: 'ja',
		flagImg: '/flags/ja.webp'
	}]
const allLanguagesDetails = 
[
	{
		name:'fr',
		flagImg:"/flags/fr.webp"
	},
	{
		name:'de',
		flagImg:"/flags/de.png"
	},
	{
		name:'es',
		flagImg:"/flags/es.webp"
	},
	{
		name:'it',
		flagImg:"/flags/it.png"
	},
	{
		name:'zh-Hans',
		flagImg:"/flags/zh-Hans.png"
	},
	{
		name:'ko',
		flagImg:"/flags/ko.webp"
	},
]