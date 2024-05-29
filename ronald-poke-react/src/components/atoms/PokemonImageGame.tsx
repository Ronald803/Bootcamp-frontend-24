import {useContext} from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'

function PokemonImageGame() {
	const {pokemonImageClass,pokemonsRandomFour,oneRandomNumber} = useContext(GeneralContext)
  return (
    <div className='game-image-container'>
    <img 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonsRandomFour[oneRandomNumber]?.id}.png`}
      className={pokemonImageClass}
    />
  </div>
  )
}

export default PokemonImageGame