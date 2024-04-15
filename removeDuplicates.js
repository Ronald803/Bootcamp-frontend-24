let arr2 = [7,9,1,'a','a','f',9,4,2,'d','d']

const removeDuplicates = (itemsArray)=>{
  let frequencyItems = {};
  itemsArray.forEach(item=>{
    frequencyItems[item] = frequencyItems[item] + 1;
  })
  let withoutDuplicatesDisordered = [];
  let withoutDuplicatesOrdered = [];
  for(let item in frequencyItems){
    if(frequencyItems[item] == 1){
      withoutDuplicatesDisordered.push(item)
    }
  }
  itemsArray.forEach(item=>{
    if(withoutDuplicatesDisordered.some(e=>e==item)){
    	withoutDuplicatesOrdered.push(item)
    }
  })
  return withoutDuplicatesOrdered
}

console.log(removeDuplicates(arr2));