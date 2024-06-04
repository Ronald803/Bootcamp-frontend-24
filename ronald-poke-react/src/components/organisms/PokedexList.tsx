import {useContext, useState} from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'

function PokedexList() {
  const {partialListPokedex} = useContext(GeneralContext)
  return (
    <div>
      {partialListPokedex?.map((pokemon,key)=>(
        <p>{pokemon.id} {pokemon.name}</p>
      ))}
    </div>
  )
}

export default PokedexList