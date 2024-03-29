// const myPersevereCodeObj = {
//   wait: 'I do not object'
// };

// // Part 1 - Adding and changing properties in plain JS.
// // Here, we'll be changing and adding properties BELOW the creation of the object.
// // You won't change lines 1-3 above, but instead set and change the properties for each step below by writing NEW code underneath each comment.

// // Below, set the value of property `wait` to be "I object".


// // Add the new property `isAnExcellentObject` and set it to `true`.


// // Add the property `term` and set it to 1.


// // Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.


// // Now add a new property called `currentScore` and set it to 3.


// // Now add a new property called `cumulativeScore` and set it to 50.


// // Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.


// // Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.


// // Part 2 - your own object.
// // Now make a new EMPTY object that represents yourself. You won't put any properties in the curly braces, but just like in part 1, add them in each step below using plain JavaScript statements.


// // Add a `firstName` property and set it to a string.


// // Add a `lastName` property and set it to a string.


// // Add a `fullName` property and set it to the name properties put together with a space string in the middle.


// // Add an `age` property and set it to a number.


// // Add an address property and set it to an empty array.


// // Now push three strings into that array.




// // Part 3 - setting key-value pairs in-line.
// // Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `myPersevereCodeObj` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of something. The important thing here is: this should all be done within the curly brackets of the object, not below the place where the object is declared.




// // As a stretch goal, go back pre-populate the object with at least one property using a key name that CAN'T be a variable name. That would be anything with a space in it, or a dash, or starting with a number.




// // 📔 Object
// // Creating an empty object
// // Creating an objecting with values
// // Getting values from an object
// // Creating object methods
// // Setting new key for an object
// // Object Methods
// // Getting object keys using Object.keys()
// // Getting object values using Object.values()
// // Getting object keys and values using Object.entries()
// // Checking properties using hasOwnProperty()

// //..........................................To Do............................................
// // Create an empty object called 
// const dog={
// }


// // Print the the dog object on the console
// console.log(dog)

// // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// // const dog={
// //   name: "Spike",
// //   legs: 4,
// //   color: "Black",
// //   age: 14,
  
// // }
// // console.log(dog["color"])
// // Get name, legs, color, age and bark value from the dog object


const person={
  firstName: "Cameron Is The",
  lastName: "Best",
  greet: function greet(){
     return("Sadie Up Next") 
  }
}
console.log(person);
console.log(person.greet())