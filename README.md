## Concat array challenge
    1. Tab size changed to 2, as a recommendation of the trainer in a past class of Frontend
    2. Now ".map" method is used in a better way

```js
// ------------ After ----------------
const concatArray = (wordsArray)=>{
    let sentencesArray = [];
    wordsArray.map(words=>{
        sentencesArray.push(words.join(" "))
    })
    return sentencesArray
}
// ------------ Now ------------------ 
const concatArray = (wordsArray)=>{
  let sentencesArray = wordsArray.map(words=>{
    return words.join(" ")
  })
  return sentencesArray
}
```