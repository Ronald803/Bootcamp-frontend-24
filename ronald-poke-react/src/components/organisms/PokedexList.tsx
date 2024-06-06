import {useContext, useState} from 'react'
import { GeneralContext } from '../../modules/Context/GeneralContext'
import '../../styles/pokedexList.css'
function PokedexList() {
  const {partialListPokedex} = useContext(GeneralContext)
  return (
    <div className='pokedex-table'>
      <tr className='pokedex-table-header'>
        <th>ID</th>
        <th>Name</th>
        <th>Image</th>
      </tr>
      {partialListPokedex?.map((pokemon,key)=>(
        <tr>
          <td>{pokemon.id}</td>
          <td>{pokemon.name}</td>
          <td>
            <div className='pokedex-table-imagebuttons'>
              <div><button>{'<'}</button></div>
              <img src={pokemon.sprites.front_default} className='pokedex-table-imagebuttons-img'/>
              <div><button>{'>'}</button></div>
            </div>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default PokedexList