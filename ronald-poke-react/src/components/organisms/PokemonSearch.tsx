import { useContext } from 'react'
import InputButton from '../molecules/inputs/InputButton'
import { GeneralContext } from '../../modules/Context/GeneralContext'

function PokemonSearch(props) {
  const { setPartialListPokedex } = useContext(GeneralContext)
	const handleClick = (pokemonToSearch) => {
		console.log(pokemonToSearch);		
		let pokemonName = pokemonToSearch.toLowerCase()
		const index = props.allPokemons.findIndex(pokemon=>pokemon.name == pokemonName)
		if(index!=-1){
			setPartialListPokedex([props.allPokemons[index]])
		}
	}
	return (
    <div>
			<InputButton
				onClick={handleClick} 
				onClickTwo={console.log}
				type={"text"}
				buttonText={"Search"}
			/>
		</div>
  )
}

export default PokemonSearch