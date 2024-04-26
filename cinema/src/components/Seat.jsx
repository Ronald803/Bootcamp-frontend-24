import React, { useState } from 'react'

function Seat(props) {
    // let imgSrc = ''
    // if(props.seat.availability){
    //     imgSrc = '../src/assets/seat.png'
    // } else {
    //     imgSrc = '../src/assets/seatReserved.png'
    // }
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