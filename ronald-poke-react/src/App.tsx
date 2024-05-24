import './App.css'
import Navbar from './components/molecules/bars/Navbar'
import Game from './components/organisms/Game'
import { getPokemonsList } from './modules/pokeApiRequests'
import { useState, useEffect } from "react"

function App() {
  const [pokemonsRandomFour, setPokemonsRandomFour] = useState([])
  const oneRandomNumber = Math.floor(Math.random() * 4)
  useEffect(()=>{
    newGame()
  },[])
  const newGame = async () => {
    const pokemonsList = await getPokemonsList()
    setPokemonsRandomFour(chooseFourRandom(pokemonsList));
  }
  return (
    <>
      <Navbar/>
      <Game
        pokemonsRandomFour = {pokemonsRandomFour}
        oneRandomNumber = { oneRandomNumber }
      />
    </>
  )
}

export default App
const chooseFourRandom = (pokeList:Array<any>) => {
  let pokemonsListCopy = [...pokeList]
  let choosen = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * pokemonsListCopy.length)
    choosen.push(pokemonsListCopy[randomNumber])
    pokemonsListCopy.splice(randomNumber,1)
  }
  return choosen
}
