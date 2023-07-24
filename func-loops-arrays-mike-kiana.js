// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//Pseudo code:
  //return all number multplied by 3
  //need create function
  // declare a new variable
  // create a loop
  // return modified variable
  // use .length
  // use .push to add each index
const testArr1 = [3, 9, 15, 4, 10]

const times3 = (array) => {
  let newArr = []
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i] * 3)
    }
      return newArr
}
      
    console.log(times3(testArr1))
// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//pseudo code:
  // input array and only output the odd number
  // create a function
  // decalre new variable
  // create a loop a return the new variable
  // an if needs to be within the loop
  // % 2 !== 0
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  }
        return newArr
}
  console.log(onlyOdd(testArr2))
// // output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
//pseudo code:
  // combine all strings and output only letters of the array
  // create a fucntion
  // delclare a new variable
  // create a for loop with an if since we have numbers in our array
  //return new varaible
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
 const extractLetters = (array) => {
    let letterString = ""

    for (const element of array) {
      if (typeof element === "string") {
        letterString += element
      }
    }
        return letterString
 }

    console.log(extractLetters(comboArr))
// // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
  //create a function with a for loop and declare a new variable
  // add all numbers in the array, use += operator
const addThese1 = [1, 2, 3, 4]

const addedNums = (array) => {
  let newArr = 0
  for (let i = 0; i < array.length; i++) { 
    newArr += array[i]
  }
  return newArr
}

console.log(addedNums(addThese1))
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
    //create function
    // set a placeholder(parameter) in the function
    // index of 
    // declare new variables
const indexHighestNumber = [1, 4, 2, 3]

const findLargestNum = (array) => {
  let maxNum = array[0]
  let maxIndex = 0

  for (let i = 0; i < array.length; i++) {
    if(array[i] > maxNum) {
      maxNum = array[i]
      maxIndex = i
    }
  }
    return maxIndex
}

console.log(findLargestNum(indexHighestNumber))
// // output: 1

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300
// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.