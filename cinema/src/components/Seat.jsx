import React from 'react'

function Seat(props) {
    let imgSrc = ''
    if(props.seat.availability){
        imgSrc = '../src/assets/seat.png'
    } else {
        imgSrc = '../src/assets/seatReserved.png'
    }
    const seatClick = ()=>{
        console.log("click")
        console.log(`row: ${props.rowNumber}\tcolumn: ${props.colNumber}`)
        props.cinema.showSeatStatus()
        props.cinema.reservaSeat(props.rowNumber,props.colNumber)
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