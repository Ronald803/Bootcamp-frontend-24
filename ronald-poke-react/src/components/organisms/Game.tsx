import {useState,useEffect,useContext} from 'react'
import ButtonsList from "../molecules/lists/ButtonsList"
import '../../styles/game.css'
import LanguageBar from "../molecules/bars/LanguageBar"
import { GeneralContext } from '../../modules/Context/GeneralContext'
import PokemonImageGame from '../atoms/PokemonImageGame'

function Game(props:any) {
  const languagesAvailable = ["en","es","ko","ja"]
  const [languageChoosen, setLanguageChoosen] = useState(null)
  const [pokemonsNames, setPokemonsNames] = useState([])
  
  const { 
    pokemonsRandomFour
  } = useContext(GeneralContext)

  useEffect(()=>{
    let pokemonsNamesUpdatedLanguage:Array<string> = []
    pokemonsRandomFour.forEach(pokemon=>{
      let name:string = "";
      pokemon.names.forEach(pokemonName=>{
        if(pokemonName.language.name==languageChoosen){
          name = pokemonName.name
        }
      })
      pokemonsNamesUpdatedLanguage.push({name,id:pokemon.id})
    })
    setPokemonsNames(pokemonsNamesUpdatedLanguage)
  },[languageChoosen])
  return (
    <div>
      <LanguageBar 
        languagesAvailable={languagesAvailable}
        setLanguageChoosen={setLanguageChoosen}
      />
      <PokemonImageGame/>
      <div className="game-main-container">
        <div className="game-button-list">
          <ButtonsList arrayButtons={pokemonsNames}/>
        </div>
      </div>
    </div>
  )
}

export default Game

