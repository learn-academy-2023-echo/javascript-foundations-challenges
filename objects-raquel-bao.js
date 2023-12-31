// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// // Write the code that accesses the first name of the person object.
console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "earth"
console.log(person.homePlanet)
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.message= function (){
    return this.firstName + " " + this.lastName + " " + "is from planet " + this.homePlanet 
}
console.log(person.message())
//Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (obj) => {
    return "The product is a " + obj.name + ". It costs $" + obj.price 
}
console.log(describeProduct(product))
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals. 
 const totalWithTax = (obj) => {
   return (obj.price * 1.07).toFixed(2)
 }
 console.log(totalWithTax(product))
// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const forLunch = (obj) => {
    return "The ingredients for a " + obj.name + " " + obj.type + " are " + obj.ingredients.join(", ")
}
console.log(forLunch(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.forLunch = function (obj) {
    return "The ingredients for a " + obj.name + " " + obj.type + " are " + obj.ingredients.join(", ")
}
console.log(lunch.forLunch(lunch))

// Consider this variable:
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const onlyCats = (obj) => {
  return obj.filter(value => {
    if (value.type === "cat"){
      return value
    }
  })
}

//output: [{ name: "Fluffy", type: "cat", age: 14 }, { name: "Hank", type: "cat", age: 11 }]
console.log(onlyCats(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const onlyNames = (animalsObj) => {
  return animalsObj.map((value) => value = value.name)
}
console.log(onlyNames(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const greaterThan10YO = (obj) => {
  let outcome = obj.filter(value => value.age > 10)
  return outcome.map(value => value.name) 
}
console.log(greaterThan10YO(animals))

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalWord = (arr) => {
  return arr.map(value => value = "I am " + value.type + " and I am " + value.age + " years old. My name is " + value.name + "." )
}
console.log(animalWord(animals))

// Consider this variable:
const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:
const {name , genre} = author
console.log(`${name} is a ${genre} author`)
// output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}
const { species, pokemon_type } = pokeOne
console.log(`${species} is ${pokemon_type} type`) //=====> "Charmander is Fire type"

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}

// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.area = function () {
  return this.base * this.height
}
console.log(triangleDimensions.area)

// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6

//Stretch Goals
const learn = {
    cohorts: {
      2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
      2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
    }
  }

//Write the code that logs the name of your cohort.
  console.log(learn.cohorts[2023][4])

// Write the code that uses destructuring to log the name of your cohort.
const {cohorts: {2023: [, , , ,Echo]}} = learn
console.log(Echo)

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

const learnCohorts = (obj) => {
  let arr2022 = obj.cohorts[2022].map(value => value = "2022 " + value)
  let arr2023 = obj.cohorts[2023].map(value => value = "2023 " + value)
  return arr2022.concat(arr2023)
}

console.log(learnCohorts(learn))

//// output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]