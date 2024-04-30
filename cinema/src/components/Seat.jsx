import React, { useState } from 'react'

function Seat(props) {
  const [imgSrc, setImgSrc] = useState('../src/assets/seat.png')
  const seatClick = ()=>{
    props.cinema.reservaSeat(props.rowNumber,props.colNumber)
    if(!props.seat.availability){
      setImgSrc('../src/assets/seatReserved.png')
    }
  }
  return (
    <div className='seat'>
      <button>
        <img 
          src={imgSrc} 
          onClick={()=>seatClick()}/>
      </button>
    </div>
  )
}

export default Seat