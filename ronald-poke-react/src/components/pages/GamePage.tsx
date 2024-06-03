import { useContext, useEffect, useState } from 'react'
import {getPokemonsList} from '../../modules/pokeApiRequests'
import Game from '../organisms/Game'
import GameScore from '../organisms/GameScore'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import Popup from '../molecules/Popup'

function GamePage() {
  const { 
    setPokemonImageClass,
    setPokemonsRandomFour,
    setOneRandomNumber,
    pokemonChoosenGame,
    isGameStarted, 
    setIsGameStarted, 
    languageChoosen,
    setPokemonsNames,
    attemptsGame,
    gameScore,
    setAttemptsGame,
    setGameScore
  } = useContext(GeneralContext)
  const [popupMessage, setPopupMessage] = useState("Would you like to start a new game?")
	const newGame = async () => {
    setPokemonImageClass('game-imagepokemon-shadow')
    const pokemonsList = await getPokemonsList("game")
    const fourPokemons = chooseFourRandom(pokemonsList)
    setPokemonsRandomFour(fourPokemons);
    setIsGameStarted(true)
    setOneRandomNumber(Math.floor(Math.random() * 4))
    let pokemonsNamesUpdatedLanguage:Array<string> = []
    fourPokemons.forEach(pokemon=>{
      let name:string = "";
      pokemon.names.forEach(pokemonName=>{
        if(pokemonName.language.name==languageChoosen){
          name = pokemonName.name
        }
      })
      pokemonsNamesUpdatedLanguage.push({name,id:pokemon.id})
    })
    setPokemonsNames(pokemonsNamesUpdatedLanguage)
    if(attemptsGame==3){
      setAttemptsGame(0)
      setGameScore(0)
    }
  }
  return (
    <div>
      {
        !isGameStarted 
        &&
        <Popup
          message={attemptsGame == 3 ? `Points: ${gameScore}.`: "Would you like to start a new game?"}
          onAccept={newGame}
          buttonText={attemptsGame != 3 ? "Start!": "New Round"}
        />
      }
			<Game/>
			<GameScore/>
      {pokemonChoosenGame}
    </div>
  )
}

export default GamePage

const chooseFourRandom = (pokeList) => {
  let pokemonsListCopy = [...pokeList]
  let choosen = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * pokemonsListCopy.length)
    choosen.push(pokemonsListCopy[randomNumber])
    pokemonsListCopy.splice(randomNumber,1)
  }
  return choosen
}
