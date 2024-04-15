let data = [
  ["The","little","horse"],
  ["Plane","over","the","ocean"],
  ["Chocolate","ice","cream","is","awesome"],
  ["this","is","long","sentence"]
]

const concatArray = (wordsArray)=>{
  let sentencesArray = wordsArray.map(words=>{
    return words.join(" ")
  })
  return sentencesArray
}

console.log(concatArray(data));