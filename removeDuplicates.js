let arr2 = [7,9,1,'a','a','f',9,4,2,'d','d']

const removeDuplicates = (itemsArray)=>{
    let frequencyItems = {};
    itemsArray.forEach(item=>{                       // refactoring:  map replaced for forEach
        if(frequencyItems[item]){
            frequencyItems[item] = frequencyItems[item] + 1;
        } else {
            frequencyItems[item] = 1;
        }
    })
    let withoutDuplicatesDisordered = [];
    let withoutDuplicatesOrdered = [];
    for(let item in frequencyItems){
        if(frequencyItems[item] == 1){
            withoutDuplicatesDisordered.push(item)
        }
    }
    itemsArray.forEach(item=>{                              // refactoring:  map replaced for forEach
        if(withoutDuplicatesDisordered.some(e=>e==item)){
            withoutDuplicatesOrdered.push(item)
        }
    })
    return withoutDuplicatesOrdered
}

console.log(removeDuplicates(arr2));