import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
export function getInfoMove(url:string){
  return axios.get(url)
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = [1,2,3];
  }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult).then(()=>{
      this.displayInfo();
    });
  }

  async buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    pokemon.types.forEach(type=>{
      this.types.push(type.type)
    })
    const chosenMoves = await chooseFourAleatory(pokemon.moves);
    this.moves = chosenMoves;
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    console.log('Type(s):')
    this.types.forEach(type => {
      console.log(`\t${type.name}`);
    });
    console.log('Moves:');
    this.moves.forEach(move => {
      console.log(`\t${move.name}`);
    });
  }
}

export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2,4];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    console.log('Trainer:', this.name);
    await this.getPokemons();
  }
}

const chooseFourAleatory = async (arr) => {
  let choosen: Move[]= []
  for (let i = 0; i < 4; i++) {
    let randomPosition = Math.floor(Math.random()*arr.length);
    let answer = await getInfoMove(arr[randomPosition].move.url)
    choosen.push(
      {
        name: arr[randomPosition].move.name, 
        url: arr[randomPosition].move.url,
        accuracy: answer.data.accuracy,
        type: answer.data.type.name,
        damage: answer.data.power,
        powerPoints: answer.data.pp,
      })
    arr.splice(randomPosition,1)
  }
  return choosen
}

