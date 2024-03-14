const findSmallestNumber = (numbersArray) => {
    let minorNumber = numbersArray[0]
    numbersArray.map(singleNumber=>{
        if(singleNumber<minorNumber){
            minorNumber = singleNumber
        }
    })
    return minorNumber
}

let smallestNumber = findSmallestNumber([12,6,10,2,45,100])
console.log(smallestNumber);