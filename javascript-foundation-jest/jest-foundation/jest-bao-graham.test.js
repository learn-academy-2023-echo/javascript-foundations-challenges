// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    // Create the function that will make the test pass.

describe("tiredOrNot", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect(tiredOrNot("yes")).toEqual("drink coffee")
        expect(tiredOrNot("no")).toEqual("keep working")
    })
})

const tiredOrNot = (str) => {
    if (str === "yes"){
        return "drink coffee"
    } else if (str === "no"){
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
    // Create the function that will make the test pass.

describe("stressedOrNot", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
        expect(stressedOrNot("yes")).toEqual("relax")
        expect(stressedOrNot("no")).toEqual("keep going")
    })
})

const stressedOrNot = (str) => {
    if (str === "yes"){
        return "relax"
    } else if( str === "no"){
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
    // Create the function that will make the test pass.

    describe("over300", () => {
        it("returns 'in budget' if a price is lower than $300.", ()=> { expect(over300("no")).toEqual("in budget")

        })
    })

    const over300 = (string) => {
        if (string === "no"){
            return "in budget"
        }
    }

// Write the test for a function that takes in two numbers and returns the smaller number.
    // Create the function that will make the test pass.

    //Input: num1 and num2. num1 =5 num2 =10
    //Output: num1 (5)

    describe("smallerNum", () => {
        it("returns the smaller number.", () => {
            let num1 = 5
            let num2 = 10
            expect(smallerNum(num1, num2)).toEqual(num1)
        })
    })

    const smallerNum = (num1, num2) => {
        if (num1 < num2){
            return num1
        }else{
            return num2
        }
    }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
    // Create the function that will make the test pass.
    
    describe("isThisOdd", () => {
        it("returns whether the number is odd", () => {
            expect(isThisOdd(3)).toEqual("yes, this is odd")
        })
    })

    const isThisOdd = (num) => {
        if (num % 2 !== 0){
            return "yes, this is odd"
        }
    }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
    // Create the function that will make the test pass.

    describe("whatColor", () => {
        it("returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
            expect(whatColor("banana")).toEqual("yellow")
            expect(whatColor("apple")).toEqual("red")
            expect(whatColor("grape")).toEqual("purple")
        })
    })

    const whatColor = (fruit) => {
        if (fruit === "banana"){
            return "yellow"
        } else if (fruit === "apple"){
            return "red"
        } else if (fruit === "grape"){
            return "purple"
        }
    }

// Write the test for a function called rick that returns "Morty".
    // Create the function that will make the test pass.

    describe("rick", () => {
        it("returns 'Morty'", () => {
            expect(rick()).toEqual("Morty")
        }) 
    })

    const rick = () => {
        return "Morty"
    }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
    // Create the function that will make the test pass.

describe("greeter", () => {
    it("returns a greeting with that name to the screen.", () => {
        let name = "Jerry"
      expect(greeter(name)).toEqual(`Hi ${name}`)  
    })
})

const greeter = (string) => {
    return `Hi ${string}` 
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
    // Create the function that will make the test pass.

describe("oddOrEven", () => {
    it("returns a number as an argument and logs whether the number is odd or even.", () => {
        expect(oddOrEven(5)).toEqual("Number is odd")
        expect(oddOrEven(8)).toEqual("Number is even")
    })
})

const oddOrEven = (num) => {
    if (num % 2 !== 0){
        return "Number is odd"
    }else {
        return "Number is even"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
    // Create the function that will make the test pass.

    describe("doubler", () => {
        it("returns the result of the number multiplied by 2", () => {

            expect(doubler(4)).toEqual(8)}
    })

    const doubler = (num) => {
        return num * 2
    }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
    // Create the function that will make the test pass.

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
    // Create the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
    // Create the function that will make the test pass.