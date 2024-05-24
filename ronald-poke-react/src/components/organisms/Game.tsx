import {useState,useEffect} from 'react'
import ButtonsList from "../molecules/lists/ButtonsList"
import '../../styles/game.css'
import LanguageBar from "../molecules/bars/LanguageBar"

function Game(props:any) {
  const languagesAvailable = ["en","es","ko","ja"]
  const [languageChoosen, setLanguageChoosen] = useState(null)
  const [pokemonsNames, setPokemonsNames] = useState([])
  useEffect(()=>{
    let pokemonsNamesUpdatedLanguage:Array<string> = []
    props.pokemonsRandomFour.forEach(pokemon=>{
      let name:string = "";
      pokemon.names.forEach(pokemonName=>{
        if(pokemonName.language.name==languageChoosen){
          name = pokemonName.name
        }
      })
      pokemonsNamesUpdatedLanguage.push(name)
    })
    setPokemonsNames(pokemonsNamesUpdatedLanguage)
    console.log(pokemonsNames)
  },[languageChoosen])
  console.log(props.pokemonsRandomFour);
  console.log(props.oneRandomNumber)
  return (
    <div>
      <LanguageBar 
        languagesAvailable={languagesAvailable}
        setLanguageChoosen={setLanguageChoosen}
      />
      <div className="game-main-container">
        <div className="game-button-list">
          <ButtonsList arrayButtons={pokemonsNames} />
        </div>
      </div>
      {languageChoosen}
    </div>
  )
}

export default Game

