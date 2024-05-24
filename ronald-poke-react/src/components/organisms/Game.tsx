import ButtonsList from "../molecules/lists/ButtonsList"
import '../../styles/game.css'
import { getPokemonsList } from "../../modules/pokeApiRequests"
import LanguageBar from "../molecules/bars/LanguageBar"
function Game() {
  const pokemonOptions = ["Pikachu","Charizard","Gengar","Articuno"]
  const pokemonsList = getPokemonsList()
  const pokemonsRandomFour = chooseFourRandom(pokemonsList);
  const languagesAvailable = ["English", "Spanish", "Japanese"]
  return (
    <div>
      <LanguageBar languagesAvailable={languagesAvailable}/>
      <div className="game-main-container">
        <div className="game-button-list">
          <ButtonsList arrayButtons={pokemonOptions} />
        </div>
      </div>
    </div>
  )
}

export default Game

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
