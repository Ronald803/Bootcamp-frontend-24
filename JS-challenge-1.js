class Seat {
    constructor(rowPosition,seatPosition){
        this.rowPosition = rowPosition;
        this.seatPosition = seatPosition;
        this.availability = true;
    }
}
class Cinema {
    constructor(rowsQuantity,seatsQuantity){
        this.rowsQuantity = rowsQuantity;
        this.seatsQuantity = seatsQuantity;
        this.allSeats = [];
        for (let i = 0; i < rowsQuantity; i++) {
            for (let j = 0; j < seatsQuantity; j++) {
                this.allSeats.push(new Seat(i,j))                
            }
        }
    }
    showSeatStatus(){
        return this.allSeats
    }
    reservaSeat(row,seat){
        let index = this.allSeats.findIndex(s=>(s.rowPosition==row && s.seatPosition==seat))
        if(index != -1 ){
            if(this.allSeats[index].availability === true){
                this.allSeats[index].availability = false
                console.log("Seat reserved"); 
            } else {
                console.log("Seat not available");
            } 
        }
    }
}