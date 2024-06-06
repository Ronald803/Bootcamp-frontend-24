import {useContext, useState} from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import '../../styles/pokedexList.css'
import PokedexCard from './PokedexCard'
function PokedexList() {
  const {partialListPokedex} = useContext(GeneralContext)
  return (
    <div className='pokedex-list'>
      {partialListPokedex?.map((pokemon)=>(
        <PokedexCard pokemon={pokemon}/>
      ))}
    </div>
  )
}

export default PokedexList