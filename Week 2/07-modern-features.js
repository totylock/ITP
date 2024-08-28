/* 
    Warm Up Exercise

    Activity: Finding the Maximum Number in an Array

    Instructions:
    - Prompt the user to enter a number 5 times. Store each number into an array called “numbers”.
    - Create a function called “findMax” where it will find the maximum number in the array.
    - Log the maximum number in the console.

    const numbers = [8,12,9,13,6];
    console.log(findMax(numbers)); //Output: 13

    const moreNumbers = [10,19,12,17,21];
    console.log(findMax(moreNumbers)); //Output: 21
*/

/* ACTUAL SOLUTION */

// const EnterNumbers = prompt("Enter number:")

// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     const max = numbers[i]>numbers[i+1];
//     console.log(max);
// for (let s = 0; s < max.length; s++) {
//     const maxNum = array[s];
//     console.log(maxNum);
// }

// }



/* ACTUAL LESSON */
// Old version
function greet(name) {
    return "Hello, " + name;
}

// Modern version of functions (one-liners)
const greetModern = name => "Hello, " + name;

// Modern version (not one-liner)
const sum = (x, y) => {
    console.log("Calculating the sum...");
    return x + y;
}

console.log(greetModern("John"));
console.log(sum(2, 2))

/* -- TEMPLATE LITERALS -- */
let name = "John";
let age = 30;

console.log("Hi, my name is " + name + ". I am " + age + " years old.");
console.log(`Hi, my name is ${name}. I am ${age} years old.`);


// /* -- DESTRUCTURING -- */ getting multiple values to assign in new variable 
// Array
let numbers = [1, 2, 3, 4, 5];

let [first, second, third, fourth, fifth, sixth] = numbers;
console.log(`${first}, ${second}, ${third}, ${fourth}, ${fifth}, ${sixth}`);


// Accessing?
console.log(numObject["firstNum"]);


// Objects (?)
let numObject = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
}


// Destructure an object...
let {firstNum, secondNum, thirdNum} = numObject;
console.log(`${firstNum}, ${secondNum}, ${thirdNum}`);


// Destructuring with default values
const painting = {
    artist: "Michelangelo",
    // year: 1550,
    dimensions: "400 x 200"
}

const painting2 = {
    artist2: "Van Gogh",
    year2: 1760
}

const {artist, year = 1552, dimensions} = painting;
const {artist2, year2, dimensions2 = "1000 x 1000"} = painting2;

console.log(artist, year, dimensions);
console.log(artist2, year2, dimensions2);


/* -- SPREAD AND REST OPERATORS -- */
// Manipulate arrays and functions.
// spread - getting in one line

let odd = [1, 3, 5];
let even = [2, 4, 6];

console.log(odd);
console.log(...odd); // rest

let oddAndEven = [...odd, ...even];
console.log(oddAndEven);

// with destructuring
numbers = [1, 2, 3, 4, 5];
let [x, y, ...z] = numbers;

console.log(x, y, z);

// objects - multiple properties and values
const grades = {
    math: 94,
    english: 81,
    science: 97,
    pe: 70
}

const gradesWithEC = {
    ...grades,
    extraCurricular: 87
}

console.log(gradesWithEC);

// objects with destructuring
let {math, english, ...others} = gradesWithEC;
console.log(math, english, others);


/* -- FUNCTIONS W/ DEFAULT PARAMETERS -- */
const multiply = (a, b = 5) => a * b;

console.log(multiply(8))
console.log(multiply(8, 6));