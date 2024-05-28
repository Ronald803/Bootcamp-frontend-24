import {useState,useEffect} from 'react'
import ButtonsList from "../molecules/lists/ButtonsList"
import '../../styles/game.css'
import LanguageBar from "../molecules/bars/LanguageBar"

function Game(props:any) {
  const languagesAvailable = ["en","es","ko","ja"]
  const [languageChoosen, setLanguageChoosen] = useState(null)
  const [pokemonsNames, setPokemonsNames] = useState([])
  const [pokemonChoosen, setPokemonChoosen] = useState(null)
  useEffect(()=>{
    let pokemonsNamesUpdatedLanguage:Array<string> = []
    props.pokemonsRandomFour.forEach(pokemon=>{
      let name:string = "";
      pokemon.names.forEach(pokemonName=>{
        if(pokemonName.language.name==languageChoosen){
          name = pokemonName.name
        }
      })
      pokemonsNamesUpdatedLanguage.push({name,id:pokemon.id})
    })
    setPokemonsNames(pokemonsNamesUpdatedLanguage)

    if(pokemonChoosen == props.pokemonsRandomFour[props.oneRandomNumber]?.id){
      alert("Good!!!!")
      props.setGameScore(props.gameScore+1)
    } else {
      alert("Buhhhhh!!!!")
    }
  },[languageChoosen,pokemonChoosen])
  console.log(props.pokemonsRandomFour);
  
  return (
    <div>
      <LanguageBar 
        languagesAvailable={languagesAvailable}
        setLanguageChoosen={setLanguageChoosen}
      />
      <div className='game-image-container'>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonsRandomFour[props.oneRandomNumber]?.id}.png`}
          className='game-imagepokemon'
        />
      </div>
      <div className="game-main-container">
        <div className="game-button-list">
          <ButtonsList arrayButtons={pokemonsNames} setPokemonChoosen={setPokemonChoosen}/>
        </div>
      </div>
    </div>
  )
}

export default Game

