let PI: number;
let age: number;
let PersonName: string;
let maybe: any;
let rol: 'Admin' | 'User';
let base_experience: number | undefined;

rol = 'User';
maybe = 25;
PI = Math.PI;
PersonName = 'Alexander';
age = 24
maybe = 'something else';
rol = 'Admin';

export class Person {
    constructor(public name:string,public age:number,public rol:'Admin'|'User' ){}
}

const person = new Person(PersonName,age,rol)

const pikachu: any = {
    id: 25,
    name: 'pikachu',
    height:4,
    weight: 60,
    base_experience: base_experience, // this can be optional value
    types: [
        {
            slot: 1,
            type: {
                name:"electric",
                url:"https://pokeapi.co/api/v2/type/13/"
            },
        }
    ],
    moves: [
        {
            move: {
                name: "thunderbolt",
                url: "https://pokeapi.co/api/v2/move/85/"
            },
        },
        {
            move: {
                name: "thunder",
                url: "https://pokeapi.co/api/v2/move/87/",
            },
        },
        {
            move: {
                name: "iron-tail",
                url: "https://pokeapi.co/api/v2/move/231/"
            },
        },
    ],
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
    }
}

console.log(person);