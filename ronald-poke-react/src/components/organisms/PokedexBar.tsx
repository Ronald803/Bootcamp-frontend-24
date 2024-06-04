import { useContext, useState, useEffect } from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'

function PokedexBar(props) {
  const { setPartialListPokedex,limitPagePokedex, setLimitPagePokedex, numberPagePokedex, setNumberPagePokedex } = useContext(GeneralContext)
	useEffect(()=>{
    updatePartialList()
  },[props.allPokemons])
  const updatePartialList = () => {
    let allPokemons = props.allPokemons;
    if(allPokemons){
      let minIndexPokemon = (numberPagePokedex-1)*limitPagePokedex
      let maxIndexPokemon = numberPagePokedex *limitPagePokedex
      let partialList = allPokemons.slice(minIndexPokemon,maxIndexPokemon)
      setPartialListPokedex(partialList)
    }
  }
  return (
    <div>
      PokedexBar
    </div>
  )
}

export default PokedexBar