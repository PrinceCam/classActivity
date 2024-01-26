// // /////////////////////////////////Functions//////////////////////////////////////////////////
// //Buliding block of your JS code
// //it is a reusable block of code allow you to perform a specific task
// // Function Declaration
// function functionName(){
//     //code goes here
// }

// functionName() //calling the function into action 

// function greetingsGenerator(name){
//     console.log("hello"+ " "+ name)
// }

// greetingsGenerator("Kelebet")

// // Function without a parameter and return

// // function add(){
// //     let num1=5;
// //     let num2=5;
// //     let sum=num1+num2
// //     console.log(sum)
// // }

// // add()
// // Function returning value
// function add(){
//     let num1=5;
//     let num2=5;
//     let sum=num1+num2
//     return sum
// }

// console.log(add())


// // Function with a parameter
// // function greetingsGenerator(name){
// //     console.log("hello"+ " "+ name)
// // }

// // greetingsGenerator("Kelebet")
// // Function with two parameters
// // function adding(num1, num2){
// //     console.log(num1+num2)
// // }

// // adding(555, 89)
// // Function with many parameters
// function adding(num1, num2, num3, num4){
//     console.log(num1+num2+num3+num4)
// }

// adding(555, 89,45,48)
// //......................................To Do................................................
// // Declare a function fullName and it print out your full name.


// // Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.


// // Declare a function addNumbers and it takes two two parameters and it returns sum.


// // Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.


// // Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// // ["us", "canada","barcelona"]

// // return ["US", "CANADA", "BARCELONA"]



// let hello = n => {
//   return "Hello World!";
  
// }
// console.log(hello());

// map methed
// const names = ["dee", "cam", "ang", "andrea"]
// const namesToUpper = names.map((names) => names.toUpperCase())
// console.log(namesToUpper)


// // // // A function is a reusable block of code that you can use over and over again in your program.
// // // // 4 Ways a Function can be declared
// // // //1) Declaration Function
// // // function functionName()  {
// // //     // code goes here
// // // }
// // // functionName() this is calling the function
// // // //Example This function will return the square of a number
// //      function square()  {
// //       let num = 2
// //       let sq = num * num
// //      console.log(sq)
// //     }
// // square()
// // // // THIS IS CALLING THE FUNCTION, INVOKING, etc
// // // //function name MyFunction
// // // //add two numbers
// // // //display results to console
// // // //call the function
// //  function  myFunction() {
// //  let num = 7
// //  let sum = num + num
// //  console.log(sum)
// //  }
// //  myFunction()
// // //  //Declare a function
// //  function myFunction2() {
// //     let num = 6
// //     let prod = num * num
// //     console.log(prod)
// //  }
// // //  myFunction2()
// // // //2.Expression Function
// // // //An anonymous function.  After you crreate a function without name and we assign it to a variable.
// // // //return a value from the function that calls the variable.
// // // //Basic syntax(layout)
// // const square = function(n) {
// //     return n * n
// //     console.log(square(12))
// // }
// // // //define vaiable add, set it to a function
// // const add = function(n) {
// //     return n + n
// //     console.log(add(12))
// // }
// // const prod = function(n) {
// //     return n * n
// // }
// // console.log(prod(9))
// // //3. Anonymous Function is a function without a name
// // const anonymousFun = function() {
// //     console.log(
// //       'I am an anonymous function and my value is stored in anonymousFun'
// //     )
// //   }
// //   //4. Self Invoking Function is an anomyous function that does not have to be called to return a value.
// //         //example
// let squaredNum = (function(n) {
//     return n * n
// })(9)
// console.log(squaredNum)
// //5. Arrow function
// //Arrow function uses arrow instead of the keyword function to declare a function.
// //Let us see both function declaration and arrow function.
// //Example
// // This is how we write normal or declaration function
// // Let us change this declaration function to an arrow function
// function square(n) {
// return n * n
// }
// console.log(square(2)) // 4
// const square = n => {
// return n * n
// }
// console.log(square(2))  // -> 4
// // if we have only one line in the code block, it can be written as follows, explicit return
// const square = n => n * n  // -> 4


function  myName() {
  let name = "Quintez"
    console.log(name)
}
myName()

const square = function(c) {
    return c * c;
  };
  
  console.log(square(74)); 

//   self invoking function
//   const sum = (function (g, d) {
//     return g + d;
//   })(7, 5);
 
const add = c => {
    return c * c;
  };
  
  console.log(add(74));
