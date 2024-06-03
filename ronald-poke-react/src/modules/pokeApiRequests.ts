const urlGame = "https://pokeapi.co/api/v2/pokemon-species/";
const urlPokedex = "https://pokeapi.co/api/v2/pokemon?limit=150"
export async function getPokemonsList(purpose:string) {
  let url:string
  if(purpose == "game"){
    url = urlGame
  } else if(purpose == "pokedex"){
    url = urlPokedex
  } else {
    url = urlPokedex
  }
  console.log("request to backend")
  let pokemonsList = [];
  let pokemonsDetailsList = [];
  try {
    const response = await fetch(url);
    if (response.ok) {
      const answer = await response.json();
      pokemonsList = answer.results;
    }
    for (let i = 0; i < pokemonsList.length; i++) {
      const answerPokemonDetails = await fetch(pokemonsList[i].url);
      if (answerPokemonDetails.ok) {
        const pokemonDetails = await answerPokemonDetails.json();
        pokemonsDetailsList.push(pokemonDetails);
      }
    }
  } catch (error) {
    console.log(error);
  }
  return pokemonsDetailsList;
}