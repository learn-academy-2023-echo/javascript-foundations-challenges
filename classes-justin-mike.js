// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// done
// Write the code that outputs the black coffee's profile
//done
// Write the code that makes a coffee object with 1 cream and 2 sugars
//done
// Write the code that outputs the 1 cream and 2 sugars coffee profile
//done

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type
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


// #1
// let chrissCoffee = new Coffee("black", 0, 0 )
// console.log(chrissCoffee)
// #2
// console.log(chrissCoffee.coffeeProfile())
// #3
// let mikesCoffee = new Coffee("Cheap", 1, 2 )
// console.log(mikesCoffee.coffeeProfile())

// Latte Maker: create a class for Latte

class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor
      this.milkType = milkType
      this.shots = shots
    }
    latteProfile(){
        return `A ${this.flavor} latte with ${this.milkType} millk, and a ${this.shots}.`
    }
}
// Write a Latte class that takes a flavor, a milk type, and a number of shots
//done
// Write a method for your Latte class that outputs the latte's profile
// done
// Write the code that makes a regular, single shot latte
let frenchLatte = new Latte("fantastic", "regualar", "single shot")
// console.log(frenchLatte)
// Log the regular, single shot latte's profile
// console.log(frenchLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
let fancyDrink = new Latte("hazelnut", "almond","double shot" )
// console.log(fancyDrink)
// Log the double shot, hazelnut latte with almond milk's profile.
// console.log(fancyDrink.latteProfile())
// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor( height, radius){
    this.height = height
    this.radius = radius
 } 
 volumeFinder () {
    return (this.radius ** 2 * this.height * Math.PI).toFixed(4)
 }
}

let theAnswer = new Cylinder (2, 1)
// console.log(theAnswer.volumeFinder())

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects.

let sodaCan = new Cylinder(3, 6)
let pringlesCan = new Cylinder( 5, 9)
let telescopeTube = new Cylinder(6, 7)
let collection = [pringlesCan, telescopeTube, sodaCan]
// console.log(collection)

const threeNew = (class) {
    return 
}