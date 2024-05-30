import React, { useContext, useEffect, useState } from 'react'
import {getPokemonsList} from '../../modules/pokeApiRequests'
import Game from '../organisms/Game'
import GameScore from '../organisms/GameScore'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import Popup from '../molecules/Popup'

function GamePage() {
  const { setPokemonImageClass,setPokemonsRandomFour,setOneRandomNumber,pokemonChoosenGame,isGameStarted, setIsGameStarted } = useContext(GeneralContext)
	const newGame = async () => {
		setPokemonImageClass('game-imagepokemon-shadow')
    const pokemonsList = await getPokemonsList()
    setPokemonsRandomFour(chooseFourRandom(pokemonsList));
    setIsGameStarted(true)
    setOneRandomNumber(Math.floor(Math.random() * 4))
  }
  return (
    <div>
      {
        !isGameStarted 
        &&
        <Popup
          message={"Would you like to start a new game?"}
          onAccept={newGame}
          buttonText={"Start!"}
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
