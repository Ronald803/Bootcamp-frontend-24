import React from 'react'
import { Cinema } from '../cinemaClass'
import Row from './Row'
function CinemaComponent(props) {
	const cinema = new Cinema(props.cinemaSize.x,props.cinemaSize.y)
  return (
    <div>
    <h2 className='screen'>SCREEN</h2>
    {cinema && cinema.allSeats.map((row,i)=>{
      return (
        <Row seats={row} key={i} cinema={cinema} rowNumber={i}/>
      )
    })}
  </div>
  )
}

export default CinemaComponent