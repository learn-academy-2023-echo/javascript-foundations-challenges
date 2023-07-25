// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

//input: "tired", "not tired"
//output: "drink coffee" if tired and "keep working" if not tired
describe("howYouFeel", () => {
    it("return drink coffee or keep working based on input", () => {
        expect(howYouFeel("tired")).toEqual("drink coffee")
        expect(howYouFeel("not tired")).toEqual("keep working")
    }) 
})

const howYouFeel = (str) => {
    if (str === "tired"){
        return "drink coffee"
    }else if (str === "not tired"){
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

//input: "stressed", "not stressed"
//output: "relax" if stressed and "keep going" if not stressed
describe("stressedOrNot", () => {
    it("return relax or keep going based on input", () => {
        expect(stressedOrNot("stressed")).toEqual("relax")
        expect(stressedOrNot("not stressed")).toEqual("keep going")
    })
})

const stressedOrNot = (str) => {
    if(str === "stressed"){
        return "relax"
    }else if (str === "not stressed"){
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

//input: number
//output: "in budget" if number is lower than 300, "not in budget" if greater than 300
describe("budgetPrice", () => {
    it("return in budget or not in budget", () => {
        expect(budgetPrice(250)).toEqual("in budget")
        expect(budgetPrice(350)).toEqual("not in budget")
    })
})

const budgetPrice = (number) => {
    if(number < 300){
        return "in budget"
    }else{
        return "not in budget"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

//input: two numbers
//output: smaller number

describe("smallerNumber", () => {
    it("return the smaller number", () => {
        expect(smallerNumber(50, 75)).toEqual(50)
    })
})

const smallerNumber = (num1, num2) => {
    if (num1 < num2){
        return num1;
    }else{
        return num2;
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

//input: number
//output: number is odd
describe("oddNum", () => {
    it("return number is odd or not odd", () => {
        expect(oddNum(5)).toEqual("5 is odd")
        expect(oddNum(20)).toEqual("20 is not odd")
    })
})

const oddNum = (num) => {
    if (num % 2 !== 0){
        return `${num} is odd`
    }else{
        return `${num} is not odd`
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

//input: "banana", "apple", "grape"
//output: "yellow", "red", "purple"
describe("fruitColor", () => {
    it("return color of fruit", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

const fruitColor = (str) => {
    if (str === "banana"){
        return "yellow"
    }else if (str === "apple"){
        return "red"
    }else if (str === "grape"){
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.

//input: 
//output: "Morty"
describe("rick", () => {
    it("return Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.

//input: string of a name
//output: "Hello name"
describe("greeting", () => {
    it("returns a generic greeting", () => {
        expect(greeting("Peter")).toEqual("Hello Peter")
    })
})

const greeting = (str) => {
    return `Hello ${str}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.

//input: number
//output: number is odd or even
describe("oddOrEven", () => {
    it("returns number is odd or even", () => {
        expect(oddOrEven(35)).toEqual("35 is odd")
        expect(oddOrEven(40)).toEqual("40 is even")
    })
})

const oddOrEven = (num) => {
    if (num % 2 === 0){
        return `${num} is even`
    }else{
        return `${num} is odd`
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

//input: number
//output: number multiplied by 2
describe("doubler", () => {
    it("returns number multiplied by 2", () => {
        expect(doubler(20)).toEqual(40)
    })
})

const doubler = (num) => {
    return num * 2;
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

//input: two numbers
//output: produce of two numbers
describe("multiply", () => {
    it("returns the product of two numbers", () => {
        expect(multiply(5, 7)).toEqual(35)
    })
})

const multiply = (num1, num2) => {
    return num1 * num2;  
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

//input: two numbers
//output: first number is evenly divisible by second number or is not even divisible
describe("divisibleBy", () => {
    it("returns first number is evenly or not evenly divisible by second number", () => {
        expect(divisibleBy(20, 4)).toEqual("20 is evenly divisible by 4")
        expect(divisibleBy(21, 5)).toEqual("21 is not evenly divisible by 5")
    })
})

const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    }else{
        return `${num1} is not evenly divisible by ${num2}`
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

//input: number
//output: "fizz" if number is multiple of 3, "buzz" if number is multiple of 5, "fizzbuzz" if number is multiple of 3 and 5
describe("fizzbuzz", () => {
    it("returns fizz, buzz or fizzbuzz based on input", () => {
        expect(fizzbuzz(9)).toEqual("fizz")
        expect(fizzbuzz(20)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})

const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    }else if (num % 3 === 0){
        return "fizz"
    }else if (num % 5 === 0){
        return "buzz"
    }
}

//Create a function that takes in an array and returns a new array with all numbers multiplied by 5.
//input: array
//output: new array with numbers multiplied by 5
describe("timesFive", () => {
    it("returns a new array with numbers multiplied by 5", () => {
        const array1 = [2, 3, 6, 12, 20]
        expect(timesFive(array1)).toEqual([10, 15, 30, 60, 100])
    })
})

const timesFive = (arr) => { 
    let newArr = [];
    for (let i = 0; i < arr.length; i++){ 
        newArr.push(arr[i] * 5)
    }
    return newArr; 
}

//Create a function that takes in an array and returns a new array with only the even numbers.
//input: array
//output: new array with only even numbers
describe("evenArray", () => {
    it("returns new array with only even numbers", () => {
        const array1 = [2, 5, 12, 24, 37, 57, 82, 90]
        expect(evenArray(array1)).toEqual([2, 12, 24, 82, 90])
    })
})

const evenArray = (arr) => {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenArr.push(arr[i])
        }
    }
    return evenArr; 
}

//Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.