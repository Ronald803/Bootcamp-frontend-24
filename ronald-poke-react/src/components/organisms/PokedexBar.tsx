import { useContext, useState, useEffect } from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import ButtonRed from '../atoms/buttons/ButtonRed'

function PokedexBar(props) {
  const { setPartialListPokedex,limitPagePokedex, setLimitPagePokedex, numberPagePokedex, setNumberPagePokedex } = useContext(GeneralContext)
	useEffect(()=>{
    updatePartialList()
  },[props.allPokemons,numberPagePokedex])
  const updatePartialList = () => {
    let allPokemons = props.allPokemons;
    if(allPokemons){
      let minIndexPokemon = (numberPagePokedex-1)*limitPagePokedex
      let maxIndexPokemon = numberPagePokedex *limitPagePokedex
      let partialList = allPokemons.slice(minIndexPokemon,maxIndexPokemon)
      setPartialListPokedex(partialList)
    }
  }
  const handleChangePage = (a) => {
      if((numberPagePokedex==1 && a==-1)||(numberPagePokedex==10 && a==1)){
        return
      }
      setNumberPagePokedex(numberPagePokedex+a)
      console.log(numberPagePokedex);      
    
  }
  return (
    <div>
      <ButtonRed buttonText={"Previous"} onClick={handleChangePage} idButton={-1}/>
      <ButtonRed buttonText={"Next"} onClick={handleChangePage} idButton={1}/>
    </div>
  )
}

export default PokedexBar