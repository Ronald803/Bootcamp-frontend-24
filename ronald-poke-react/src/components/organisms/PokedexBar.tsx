import { useContext, useState, useEffect } from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import ButtonRed from '../atoms/buttons/ButtonRed'
import InputButton from '../molecules/inputs/InputButton'

function PokedexBar(props) {
  const { setPartialListPokedex,limitPagePokedex, setLimitPagePokedex, numberPagePokedex, setNumberPagePokedex } = useContext(GeneralContext)
	useEffect(()=>{
    updatePartialList()
  },[props.allPokemons,numberPagePokedex,limitPagePokedex])
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
      if((numberPagePokedex==1 && a==-1)||(numberPagePokedex==Math.round(props.allPokemons.length/limitPagePokedex) && a==1)){
        return
      }
      setNumberPagePokedex(numberPagePokedex+a)
      console.log(numberPagePokedex);      
    
  }
  const handleSetLimit = (a) => {
    setLimitPagePokedex(a)
  }
  return (
    <div className=''>
      <ButtonRed buttonText={"Prev Page"} onClick={handleChangePage} idButton={-1}/>
      <ButtonRed buttonText={"Next Page"} onClick={handleChangePage} idButton={1}/>
      <InputButton onClick={handleSetLimit} onClickTwo={setNumberPagePokedex}/>
    </div>
  )
}

export default PokedexBar