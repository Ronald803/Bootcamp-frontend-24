import { useState, useEffect} from 'react'
const url = "https://pokeapi.co/api/v2/pokemon-species/";
export function getPokemonsList(){
  const [pokemonsListDetails, setpokemonsListDetails] = useState([])
  const getPokemons = async () => {
    let pokemonsList = []
    let pokemonsDetailsList = []
    try{
      const response = await fetch(url)
      if(response.ok){
        const answer = await response.json()
        pokemonsList = answer.results
      }
      for (let i = 0; i < pokemonsList.length; i++) {
        const answerPokemonDetails = await fetch(pokemonsList[i].url)
        if(answerPokemonDetails.ok){
          const pokemonDetails = await answerPokemonDetails.json()
          pokemonsDetailsList.push(pokemonDetails)
        }
      }
      setpokemonsListDetails(pokemonsDetailsList)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getPokemons()
  },[])
  return pokemonsListDetails
}