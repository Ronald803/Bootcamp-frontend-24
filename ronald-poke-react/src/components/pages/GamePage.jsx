import React, { useEffect, useState } from 'react'
import {getPokemonsList} from '../../modules/pokeApiRequests'
import Game from '../organisms/Game'
import GameScore from '../organisms/GameScore'

function GamePage() {
  const [pokemonsRandomFour, setPokemonsRandomFour] = useState([])
	const [gameScore, setGameScore] = useState(0)
  const oneRandomNumber = Math.floor(Math.random() * 4)
  useEffect(()=>{
    newGame()
  },[])
  const newGame = async () => {
    const pokemonsList = await getPokemonsList()
    setPokemonsRandomFour(chooseFourRandom(pokemonsList));
  }
  return (
    <div>
			<Game
        pokemonsRandomFour = {pokemonsRandomFour }
        oneRandomNumber = { oneRandomNumber }
				setGameScore =  { setGameScore }
      />
			<GameScore
				gameScore = {gameScore}
			/>
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
