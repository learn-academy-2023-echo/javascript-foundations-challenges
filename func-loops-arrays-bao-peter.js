// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

//pseudocode:
// create function with paramater as array
// set empty array to a variable
// loop through array
// push muplied array[i] by 3
// return new array

// const mult3 = (array) =>{
//     let newArr = []
//     for (let i = 0; i < array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }
// console.log(mult3(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

//pseudocode:
//create function that takes in array as parameter
// assign empty arr to a variable
// loop through array
// if num is odd
    // push num into empty arr
//return new arr

// const onlyOdd = (array) => {
//     let numArr = []
//     for (let i =0; i< array.length; i++){
//         if(array[i] % 2 !== 0){
//             numArr.push(array[i])
//         }
//     }
//     return numArr
// }
// console.log(onlyOdd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
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
// // output: "nicework"

//psuedocode:
// create function with array as parameter
// create empty str assign to variable
// loop through array
// if element at i is a letter
    // arr[i] added to empty
// return new str

// const intoStr = (array) => {
//     let str = ""
//     for (let i = 0; i < array.length; i++){
//         if (typeof array[i] === "string"){
//             str += array[i]
//         }
//     }
//     return str
// } 

// console.log(intoStr(comboArr))


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

//pseudocode
// create function with array as parameter
// create sum var assign to 0
// loop through array
    //each number added to sum
// return sum

const summation = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
//console.log(summation(addThese1))

const addThese2 = []
//console.log(summation(addThese2))
// // output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
//pseudocode
//create a function that takes an array as parameter
//create a variable and assign to 0
//loop through array
    //if number is greater than assigned variable
        //reassign number to variable
//return index of largest number
const largestIndex = (arr) => {
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    return arr.indexOf(largest)
}

const indexHighestNumber = [1, 4, 2, 3]
//console.log(largestIndex(indexHighestNumber))
// // output: 1

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
//pseudocode
//create a function with two arrays as parameters
//create a variable and assign it to two arrays combined using concat
//create an empty array []
//loop through combined array
    //if empty array does not have a duplicate number from combined array
        //push number into empty array
//return new array
const noDuplicate = (array1, array2) => {
    let combined = array1.concat(array2)
    let newArr = []
    for (let i = 0; i < combined.length; i++){
        if (!newArr.includes(combined[i])){
            newArr.push(combined[i])
        }
    }
    return newArr
}

const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
//console.log(noDuplicate(arr1, arr2))
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
//pseudocode
//create a function with two numbers as parameters
//create an empty array
//use a for loop starting from 0 to num1
    //push num2 into empty array
//return new array
const filledArray = (num1, num2) => {
    let newArr = [];
    for (let i = 0; i < num1; i++){
        newArr.push(num2)
    }
    return newArr
}

// const arrayLength = 6
// const arrayValue = 0
// console.log(filledArray(arrayLength, arrayValue))
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// console.log(filledArray(arrayLength, arrayValue))
// // output: [11, 11, 11, 11]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
//create a function with number as parameter
//create a sum variable and assign it to 0
//use a for loop starting from 1 to number
    //add each number to sum
//return sum
const total = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

//const addUp1 = 4
//console.log(total(addUp1))
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// console.log(total(addUp2))
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