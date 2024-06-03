import { useEffect,useState } from 'react'
import { getPokemonsList } from '../../modules/pokeApiRequests'
import PokedexList from '../organisms/PokedexList'
import PokedexBar from '../organisms/PokedexBar'

function PokedexPage() {
  const [allPokemons, setAllPokemons] = useState(null)
  useEffect(()=>{
    getAllPokemonsApi()
  },[])
  const getAllPokemonsApi = async () => {
    const allPokemonsList = await getPokemonsList("pokedex")
    console.log(allPokemonsList)
    setAllPokemons(allPokemonsList)
  }
  return (
    <div>
      <PokedexBar allPokemons={allPokemons}/>
      <PokedexList/>
    </div>
  )
}

export default PokedexPage