const url = "https://pokeapi.co/api/v2/pokemon-species/";
export async function getPokemonsList() {
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