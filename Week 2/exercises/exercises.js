// //Exercise 1 - Grade calculator
// alert("Welcome to 'Exercise 1:Grade calculator'. Please press OK button to proceed.");
// var enterGrade = prompt("Enter your Grade:");
// if (enterGrade >=90) {
//     console.log("Congratulations for getting" +" Rich Class " +"Grade Rank of A! Your Grade is", enterGrade + ".");
//     }  else {
//     if (enterGrade>=80 && enterGrade<90) {
//     console.log(
//       "Congratulations for getting" +" Middle Class " +"Grade Rank of B! Your Grade is",enterGrade + ".");
//     }  else {
//     if (enterGrade >= 70 && enterGrade < 80) {
//     console.log(
//       "Congratulations for getting" +" Greater Improvement "+"Grade Rank of C! Your Grade is",enterGrade + "."
//     );    
//     } else {
//     if (enterGrade >= 60 && enterGrade < 70) {
//     console.log("Congratulations for getting" + " Needs Improvement " + "Grade Rank of D! Your Grade is", enterGrade + ".");   
//     } else {
//      console.log("See you next year! Your Grade is", enterGrade + ".");   
//     }
//     }
//  }   
// };

// //Exercise 2 - Print Numbers in Range
// alert("Welcome to 'Exercise 2: Print Numbers in Range'. Please press OK button to proceed.");
// let highestGrade = prompt("Enter highest Grade: ");
// let lowestGrade = prompt("Enter lowest Grade: ");
// if (lowestGrade > highestGrade) {
//   console.log("ERROR! First value should greater than second one. Please refresh your page.")
// } else{
//   while (highestGrade >= lowestGrade) {
//   console.log("Print from:", highestGrade);
//   highestGrade--;
// }
// };


// //Exercise 3 - Calculate Power
// alert("Welcome to 'Exercise 3: Calculate Power'. Please press OK button to proceed.");
// const baseNumber = prompt("Enter number for base:");
// const exponent = prompt("Enter exponent:");

// let result = 1;
// for (let i = 0; i < exponent; i++) {
//   result *= baseNumber;
// }
// console.log("The result:", result);


//Exercise 4 - FizzBuzz
alert("Welcome to 'Exercise 4 - FizzBuzz'. Please press OK button to proceed.");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}