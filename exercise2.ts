let PI: number;
let age: number;
let PersonName: string;
let maybe: number | string;
let rol: 'Admin' | 'User';
let base_experience: number | undefined;

rol = 'User';
maybe = 25;
PI = Math.PI;
PersonName = 'Alexander';
age = 24
maybe = 'something else';
rol = 'Admin';

// I use "export" because I have conflicts with the other file that has a class with the same name
export class Person {
    constructor(public name:string,public age:number,public rol:'Admin'|'User' ){}
}

const person = new Person(PersonName,age,rol)

class Move {
    constructor(public name:string,public url:string){}
}
class Sprites{
    constructor(
        public back_default: string,
        public back_female: string,
        public back_shiny: string,
        public back_shiny_female: string,
        public front_default: string,
        public front_female: string,
        public front_shiny: string,
        public front_shiny_female: string
    ){}
}
class Pokemon {
    constructor(
        public id:number,
        public name:string,
        public height:number,
        public weight:number,
        public base_experience:number|undefined,
        public types: Array<{slot:number,type:{name:string,url:string}}>,
        public moves: Move[],
        public sprites: Sprites
        ){}
}
const pikachu = new Pokemon(
    25,
    'pikachu',
    4,
    60,
    base_experience,
    [
        {
            slot:1,
            type:{
                name:"electric",
                url: "https://pokeapi.co/api/v2/type/13/"
            }
        }
    ],
    [
        new Move('thunderbolt','https://pokeapi.co/api/v2/move/85/'),
        new Move('thunder','https://pokeapi.co/api/v2/move/87/'),
        new Move('iron-tail','https://pokeapi.co/api/v2/move/231/')
    ],
    new Sprites(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
    )
    )

console.log(person);