export function words(sentence){
  if(sentence === ""){
    return "You didn't pass in a sentence"
  }
  else if(sentence === undefined){
    return "You didn't pass in a sentence"
  }
  else if(typeof(sentence) !== "string"){
    return "You didn't pass in a sentence"
  }

  else{
    let sentenceArray = sentence.split(' ')
    let occurences = {}

    for(let count = 0; count < sentenceArray.length; count++){
        let num = +sentenceArray[count] //this tries converts the current to convert the current value
                                        // to a number. Returns NaN if the string contains a non-numeric character
        if(isNaN(num) === false){
          continue
        }
        else{
          if(occurences.hasOwnProperty(sentenceArray[count])){
            occurences[sentenceArray[count]] += 1
          }// end this if block
          else{
            occurences[sentenceArray[count]] = 1
          }
        }
    }
    return occurences
  }
}
