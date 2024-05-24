import { useState, useEffect} from 'react'
const url = "https://pokeapi.co/api/v2/pokemon-species/";
export function getPokemonsList(){
  const [pokemonsList, setPokemonsList] = useState(null);
  const getPokemons = async () => {
    try{
      const response = await fetch(url)
      if(response.ok){
        const answer = await response.json()
        setPokemonsList(answer.results)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getPokemons()
  },[])
  return pokemonsList
}