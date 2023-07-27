// Coffee Maker: copy the given Coffee class into a text editor
class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }
// Write the code that makes a black coffee object
// let newCoffee1 = new Coffee("black")

// Write the code that outputs the black coffee's profile
// console.log(newCoffee)

// Write the code that makes a coffee object with 1 cream and 2 sugars
// let newCoffee2 = new Coffee("sweet", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(newCoffee2.coffeeProfile())

// Latte Maker: create a class for Latte
class Latte {
    constructor(flavor, type, shots){
        this.flavor = flavor
        this.type = type
        this.shots = shots
    }
    latteProfile() {
        if (this.shots > 1){
            return `A ${this.flavor} latte with ${this.type} milk and ${this.shots} shots of espresso`
        }else{
            return `A ${this.flavor} latte with ${this.type} milk and ${this.shots} shot of espresso`
        }
    }
}

// let newLatte = new Latte("regular", "no", 1)
// console.log(newLatte.latteProfile())

// let hazeLatte = new Latte("hazelnut", "almond", 2)
// console.log(hazeLatte.latteProfile())

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.


// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    volume() {
        return Math.PI * (this.radius**2) * (this.height)
    }
}
let newVolume = new Cylinder(5, 3)
// console.log(Number(parseFloat(newVolume.volume()).toFixed(4)))

class Cylinder2 {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    volume() {
        return Math.PI * (this.radius**2) * (this.height)
    }
}
let newCylinder = new Cylinder2(3, 8)
// console.log(newCylinder.volume())
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

// Consider this function:
const combineArrays = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo)
  }
  
  console.log(combineArrays([2, 4, 2], [4, 6, 11]))
  Refactor this function to use the spread operator to combine the arrays.

// Consider this function:

const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
    return arrOne
      .concat(arrTwo)
      .concat(arrThree)
      .filter((num) => num % 2 !== 0)
  }
  
 // console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
//  Refactor this function to use the spread operator to combine the array arguments.

//   Stretch Goals
//   Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.