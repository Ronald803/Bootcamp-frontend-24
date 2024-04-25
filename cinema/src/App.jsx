import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  class Seat {
    constructor(row,column){
      this.row = row;
      this.column = column;
      this.availability = true;
    }
  }
  class Cinema {
    constructor(rowsQuantity,seatsQuantity){
      this.rowsQuantity = rowsQuantity;
      this.seatsQuantity = seatsQuantity;
      this.allSeats = [];
      for (let i = 0; i < rowsQuantity; i++) {
        let row = [];
        for (let j = 0; j < seatsQuantity; j++) {
            row.push(new Seat(i,j))                
        }
        this.allSeats.push(row)
      }
    }
    showSeatStatus(){
      console.log(this.allSeats);
    }
    reservaSeat(row,column){
      let seat = this.allSeats[row][column];
      if(seat != undefined){
        if(this.allSeats[row][column].availability === true){
          this.allSeats[row][column].availability = false;
          console.log("Seat reserved");
        } else {
          console.log("Seat not available");
        }
      } else {
        console.log("The seat does not exist");
      }
    }
  }
  
  const cinema = new Cinema(5,10);
  return (
    <div>
      {cinema.allSeats.map((newArr,i)=>{
        newArr.map((seat,j)=>{
          return(
            <div></div>
          )
        })
      })}
    </div>
  )
}

export default App
