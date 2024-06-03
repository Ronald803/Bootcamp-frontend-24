import React, { useEffect } from 'react'
import { getPokemonsList } from '../../modules/pokeApiRequests'

function PokedexPage() {
  useEffect(()=>{
    getAllPokemonsApi()
  },[])
  const getAllPokemonsApi = async () => {
    const allPokemonsList = await getPokemonsList("pokedex")
    console.log(allPokemonsList)
  }
  return (
    <div>
      PokedexPage
    </div>
  )
}

export default PokedexPage