const findLeastFrequentItem = (itemsArray) => {
  let frequencyItems = {};
  itemsArray.forEach(item=>{
		frequencyItems[item] = (frequencyItems[item] || 0) + 1;
  })
  let itemLeastFrequent;
  let frequencyItemLeastFrequent = 1000;
  for(let item in frequencyItems){
    if(frequencyItems[item]<frequencyItemLeastFrequent){
      frequencyItemLeastFrequent = frequencyItems[item];
      itemLeastFrequent = item;
    }
  }
  return itemLeastFrequent
}

let leastFrequentItem = findLeastFrequentItem([3,'c','c','a',2,3,'c',3,'c',2,4,9,9])
console.log(leastFrequentItem);
