// Coffee Maker: copy the given Coffee class into a text editor
// 
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
let blackCoffee = new Coffee("black", "no cream,", "no sugar")

// Write the code that outputs the black coffee's profile
// console.log(blackCoffee)

// Write the code that makes a coffee object with 1 cream and 2 sugars
let sweetCoffee = new Coffee("Sweet", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(sweetCoffee)

//---------------------------------------------------------------------
// Latte Maker: create a class for Latte

// class Latte {

// }
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//   constructor(flavor, milkType, shots) {
//     this.flavor = flavor
//     this.milkType = milkType
//     this.shots = shots
//   }
// }

// Write a method for your Latte class that outputs the latte's profile

// class Latte {
//   constructor(flavor, milkType, shots) {
//     this.flavor = flavor
//     this.milkType = milkType
//     this.shots = shots
//   }
//   profile() {
//     return `the flavor of the latte is ${this.flavor} with ${this.milkType} milk and ${this.shots} shots.`
//   }
// } 

// let myLatte = new Latte("vanilla", "oat", 2)
// console.log(myLatte.profile())
// Write the code that makes a regular, single shot latte

// let regLatte = new Latte("regular", "regular", 1)

// Log the regular, single shot latte's profile

// console.log(regLatte.profile())

// Write the code that makes a double shot, hazelnut latte with almond milk.

// let hazLatte = new Latte("hazelnut", "almond", "double")

// Log the double shot, hazelnut latte with almond milk's profile.

// console.log(hazLatte.profile())

// Volume of a Cylinder: create a class for Cylinder

// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius
//     this.height = height
//   }
// }

// Write a method that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }
  volume() {
    return Math.PI * this.radius ** 2 * this.height
  }
}

let cylinder1 = new Cylinder(4, 8)
console.log(cylinder1.volume())



// Write the code that rounds the volume of the cylinder to four decimal places
console.log(cylinder1.volume().toFixed(4))

// Write the code that creates three unique cylinder objects

let cylinder2 = new Cylinder(2, 7)
let cylinder3 = new Cylinder(4, 15)
let cylinder4 = new Cylinder(5, 8)