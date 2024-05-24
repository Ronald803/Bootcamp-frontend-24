import ButtonsList from "../molecules/lists/ButtonsList"
import '../../styles/game.css'
import { getPokemonsList } from "../../modules/pokeApiRequests"
function Game() {
  const pokemonOptions = ["Pikachu","Charizard","Gengar","Articuno"]
  const pokemonsList = getPokemonsList()
  const pokemonsListWithDetails = [];
  const getRandomPokemonDetails = () => {
    let randomNumber = Math.floor(Math.random() * 20)
    let randomPokemon = pokemonOptions.splice(randomNumber,1)
    pokemonsListWithDetails.push(randomPokemon)
  }
  getRandomPokemonDetails()
  getRandomPokemonDetails()
  getRandomPokemonDetails()
  getRandomPokemonDetails()
  console.log(pokemonsList)
  console.log(pokemonsListWithDetails)
  return (
    <div className="game-main-container">
      <div className="game-button-list">
        <ButtonsList arrayButtons={pokemonOptions} />
      </div>
    </div>
  )
}

export default Game