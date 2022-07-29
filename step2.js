// 1) Sum Zero

let numArr = [1, 2, 3]

let value = false

for(let i = 0; i < numArr.length; i++){
  for(let j = 1; j < numArr.length; j++){
    if(i!==j){
      if(numArr[i] + numArr[j] === 0){
        value = true
      }
    }
  }
}
console.log(value)


// 2) Unique Characters

function hasUniqueChars(str){
    return new Set(str).size === str.length
  }
  
  console.log(hasUniqueChars('johny'))

  
// 3) Pangram Sentence

let str1 = 'The quick brown fox jumps over the lazy dog'
let str2 = 'I like cats, but not mice'

const isPangram = (str) => {
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    return true
}

console.log(isPangram(str1))
console.log(isPangram(str2))


// 4) Longest Word

let arr1 = ["hi", "hello"]

const longestWord = (arr) => {
    let result = ''
    for(let i = 0; i < arr.length; i++){
        if (result.length < arr[i].length){
            result = arr[i]
        }
    }
    return result
}

console.log(longestWord(arr1))