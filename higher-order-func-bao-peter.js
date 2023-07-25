// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

const multiplyBy10 = (arrayOfNum) => {
    return arrayOfNum.map((num) => num * 10)
}

console.log(multiplyBy10(arr1))


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

const divideBy2 = (arrayOfNum) => {
    return arrayOfNum.map(num => num/2)
}

console.log(divideBy2(arr1))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
output: [7, 3, 5, 13, -9]

const onlyOdd = (arr) => {
    return arr.filter(num => num % 2 !== 0)
}

console.log(onlyOdd(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa =
"Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

const pumbaa =
"Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]


const oddChars = (string) => {
    let arrOfStr = string.split(" ")
    return arrOfStr.filter(word => word.length % 2 !== 0)
}

console.log(oddChars(pumbaa))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

//const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// // output: "nicework"

const onlyLetters = (arr) => {
  return arr.filter((char) => typeof char === "string").join('')
}
console.log(onlyLetters(comboArr))

Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]


const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

const onlyLetters = (arr) => {
  return arr.filter((char) => typeof char === "string").join('')
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

const validArray = (arr) => {
  return arr.filter((value) => value !== false && value !== null && value !== 0 && value !== "")
}
console.log(validArray(filterArrayValues))


// const validArray = (arr) => {
//   return arr.filter((value) => value !== false && value !== null && value !== 0 && value !== "")
// }
// console.log(validArray(filterArrayValues))


// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]


const everyOther = (arr) => {
  let newArr = arr.join(' ').split('')
  return newArr.map((letter, index) => index % 2 !== 0 ? letter.toUpperCase(): letter).join('').split(' ')
}
console.log(everyOther(makesWackyWords))


const everyOther = (arr) => {
  let newArr = arr.join(' ').split('')
  return newArr.map((letter, index) => index % 2 !== 0 ? letter.toUpperCase(): letter).join('').split(' ')
}
console.log(everyOther(makesWackyWords))

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"


const noVowels = (string) => {
  let vowels = "aeiouAEIOU"
  return str.split('').filter((char) => !vowels.includes(char)).join('')
}
console.log(noVowels(str))


Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328" //2344578
// output: [ , , 2, 3, 4, 5, , 7, 8]

const ownIndex = (str) => {
  let arr = str.split('')
  return arr.map((num) => num = Number(num))
}
console.log(ownIndex(stringOfNumbers))

// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3] 
const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDuplicate = (array1, array2) => {
  let combined = array1.concat(array2)
  return combined.filter((num, index) => {
    return combined.indexOf(num) === index
  })
}
console.log(noDuplicate(arr1, arr2))

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"

const noVowels = (string) => {
  let vowels = "aeiouAEIOU"
  return str.split('').filter((char) => !vowels.includes(char)).join('')
}
console.log(noVowels(str))

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328" //2344578
// // output: [4, 5, 7, 4, 3, 2, 8]

const ownIndex = (str) => {
  return str.split('').map((value) => value = Number(value) )
}

console.log(ownIndex(stringOfNumbers))

// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3] 
const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDuplicate = (array1, array2) => {
  let combined = array1.concat(array2)
  return combined.filter((num, index) => {
    return combined.indexOf(num) === index
  })
}
console.log(noDuplicate(arr1, arr2))

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// output: "yo!"

const findValue = (arr) => {
  let found = arr.find((value) => typeof value === "string")
  return found; 
}

console.log(findValue(allTheData))


// const findValue = (arr) => {
//   let found = arr.find((value) => typeof value === "string")
//   return found; 
// }

// console.log(findValue(allTheData))

