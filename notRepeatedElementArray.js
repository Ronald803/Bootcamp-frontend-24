const notRepeatedElementArray = (itemsArray) => {
    let frequencyItems = {};
    itemsArray.map(item=>{
        if(frequencyItems[item]){
            frequencyItems[item] = frequencyItems[item] + 1;
        } else {
            frequencyItems[item] = 1;
        }
    })
    for(let item in frequencyItems){
        if(frequencyItems[item] == 1){
            return item
        }
    }
    return false
}
let arr = [1,2,4,7,4,2,1]
console.log(notRepeatedElementArray(arr));