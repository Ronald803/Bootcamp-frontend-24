import React from 'react'
import Seat from './Seat'

function Row(props) {    
  return (
    <div className='row'>
        {
            props.seats.map((seat,j)=>{
                return(
                    <Seat 
                        seat={seat} 
                        key={j}
                        rowNumber={props.rowNumber}
                        colNumber={j}
                        cinema={props.cinema}
                    />
                )
            })
        }
    </div>
  )
}

export default Row