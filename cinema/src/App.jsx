import './App.css'
import Row from './components/Row';

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
  const cinema1 = new Cinema(4,6);
  return (
    <div>
      {cinema1.allSeats.map((row,i)=>{
        return (
          <Row seats={row} key={i} cinema={cinema1} rowNumber={i}/>
        )
      })}
    </div>
  )
}

export default App
