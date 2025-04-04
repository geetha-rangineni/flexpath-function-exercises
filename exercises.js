import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  
    exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1: Function Declarations and Naming Conventions

    Problem:

    Write a function declaration named calculateArea that takes the radius of a 
    circle as a parameter and returns the area of the circle. 

    The formula for the area of a circle: PI * radius * radius
    
    Use proper naming conventions for functions in JavaScript.
  
  */
  // CODE IN THE OPEN LINES BELOW

    function calculateArea(radius) {
    return PI * radius * radius; 
    console.log("The area of the circle is:", area);
  // CODE IN THE OPEN LINES ABOVE
   }

function exercise_02() {
  /* 
   
    Exercise 2: Function Expressions and Their Uses

    Problem:

    Convert the calculateArea function from Exercise 1 into 
    a function expression and assign it to a variable called calculateArea.

    Run it and log the output
  
  */
  // CODE IN THE OPEN LINES BELOW

  const calculateArea = function (radius) {
    return Math.PI * radius * radius;
  };

  console.log(calculateArea(20));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
    
    Exercise 3: Arrow Functions and How They Differ from Traditional Functions

    Problem:
    
    Rewrite the calculateArea function as an arrow function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const calculateAreaArrow = (radius) => {
    return Math.PI * radius * radius;
  };
  const calculateAreaSimplerArrow = (radius) => Math.PI * radius * radius;
  console.log(calculateAreaArrow(6)); // Outputs: 78.53981633974483
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4: Using Functions to Validate and Transform Data

    Problem:

    Write a function isValidEmail that takes a string and returns true 
    if it is a valid email address, and false otherwise. 

    For simplicity, consider an email valid if it contains 
    exactly one @ symbol and at least one . after the @.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function isValidEmail(email) {
    const atSymbolIndex = email.indexOf("@");
    if (atSymbolIndex === -1) return false;

    const dotIndex = email.indexOf(".", atSymbolIndex);
    if (dotIndex === -1) return false;

    return true;
  }

  // Usage:
  console.log(isValidEmail("testing@example.com")); // Outputs: true
  console.log(isValidEmail(".invalid-@email")); // Outputs: false

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5: Function Parameters, Including Default Values

    Problem:

    Write a function 'greet' that takes a name and an optional greeting message. 
    If no greeting is provided, it should default to 'Hello'. 
    The function should return a greeting message.
    
    Then, log the return of this function to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  // Usage:
  console.log(greet("Alex")); // Outputs: Hello, Alex!
  console.log(greet("Bunny", "Good morning")); // Outputs: Good morning, Bunny!

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
   Exercise 6: Understanding Local and Global Scope

    Problem:

    Consider the following code. What will be logged to the console and why?

    Write what you think in a code comment. Then run the code.
  
  */
  let message = "Global";

  function showMessage() {
    let message = "Local";
    console.log(message);
  }

  showMessage();
  console.log(message);

  /*

    Write what you think will happen IN THIS COMMENT BLOCK.
    Then explain why the code behaved as it did.


    The first console.log will output "Local" because it refers to the local variable 
  defined inside the showMessage function. The second console.log will output "Global" 
  because it refers to the global variable defined outside the function.
  
  The code behaves this way due to variable scoping in JavaScript. The `let` keyword creates 
  a block-scoped variable, meaning that the `message` variable inside the `showMessage` 
  function is different from the `message` variable in the global scope. When `showMessage` 
  is called, it logs the local `message`, which is "Local". After that, the global `message` 
  is logged, which is "Global".

  */
}

function exercise_07() {
  /* 
   
    Exercise 7: How Function Scope Works and Variable Limitations

    Problem:

    Write a function 'incrementCounter' that declares a variable 'counter' 
    initialized to 0 inside it, increments 'counter' by 1, and logs it to the console. 
    
    Call incrementCounter twice. 
    
    What will be logged each time and why can't we access 
    counter outside the function? Provide your answer in a code comment below
    the function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function incrementCounter() {
    let counter = 0; // Declare and initialize 'counter' inside the function
    counter += 1; // Increment 'counter' by 1
    console.log(counter); // Log the value of 'counter'
}

incrementCounter(); // Outputs: 1
incrementCounter(); // Outputs: 1

// Attempting to access 'counter' outside the function
console.log(counter); // ReferenceError: counter is not defined

  // CODE IN THE OPEN LINES ABOVE
}
/*   Explanation:

1. Each time `incrementCounter` is called, the variable `counter` is declared and initialized to `0` inside the function. 
   Since `counter` is a local variable (declared with `let`), it is scoped to the function and is re-created every time the function is called.

2. When the function is executed:
   - `counter` is set to `0`.
   - It is incremented by `1`, making its value `1`.
   - The value `1` is logged to the console.

3. Since the `counter` variable is re-declared and re-initialized to `0` every time the function is called, the output will always be `1` for each call to `incrementCounter`.

4. The `counter` variable cannot be accessed outside the function because it is defined within the function's local scope. 
   Attempting to access it outside the function results in a `ReferenceError` because the variable does not exist in the global scope.                      */
function exercise_08() {
  /* 
   
    Exercise 8: Functions That Return Other Functions

    Problem:

    Write a function 'makeMultiplier' that takes a 'multiplier' number
    and returns a new function that takes a number and 
    returns that number multiplied by 'multiplier'.

  */
  // CODE IN THE OPEN LINES BELOW

  function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier; // Multiplies the input number by the multiplier
    };
}

// Usage:
const double = makeMultiplier(4); // Creates a function that multiplies by 4
console.log(double(8)); // Outputs: 32

// Real world example
const costOfLivingAdjustment = makeMultiplier(1.03); // Creates a function for a 3% increase
console.log(costOfLivingAdjustment(50000)); // Outputs: 51500

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9: Concepts and Use Cases for Recursive Functions

    Problem:

    Write a recursive function 'factorial' that takes a 
    non-negative integer 'n' and returns its factorial.

    If 'n' is a negative number, log "Bad number input" to the console, and 
    `return` from the function. 
    This will prevent an infinite loop from occuring.

    In the future, we can use error handling techniques to handle these use cases
    in a cleaner manner.

    Info on what a factorial is: https://www.cuemath.com/numbers/factorial/

  */
  // CODE IN THE OPEN LINES BELOW

  function factorial(n) {
    // Check for negative input
    if (n < 0) {
        console.log("Bad number input");
        return; // Exit the function to prevent infinite loop
    }
    
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Outputs: 120
console.log(factorial(0)); // Outputs: 1
factorial(-3); // Outputs: "Bad number input"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  const fruits = ["apple", "banana", "cherry"];
  /* 
   
   Exercise 10: Using forEach to Iterate Over Arrays
    Problem:

    Given the array `fruits` defined above, use forEach to 
    print each fruit to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

   // Use forEach to iterate over the array and print each fruit
    fruits.forEach(function(fruit) {
    });

    // Alternatively, using arrow function syntax
    fruits.forEach(fruit => console.log(fruit));
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11: Replacing Traditional Loops with Functional Approaches

    Problem:

    Replace the following for loop with a functional approach using 
    the reduce() method to calculate the sum of an array of numbers.
  */
  // REPLACE the code below

  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum); // Outputs: 15

  // REPLACE the code above
}

function exercise_12() {
  const numbers = [10, 15, 20, 25, 30];
  /* 
   
    Exercise 12: Filtering Arrays with `filter`
    Problem:

    Given the array of numbers above, use the filter() method to 
    create a new array containing only the even numbers.

    Log this new array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

 // Using reduce to calculate the sum of the array
   const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
  }, 0); // Initial value is set to 0

   console.log(sum); // Outputs: 15
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13: How JavaScript Handles Primitives and 
                 Objects Differently in Memory


    Problem:

    Explain why modifying an object passed to a function affects 
    the original object, but modifying a primitive value does not. 

    Provide code examples to illustrate this behavior.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function modifyPrimitive(primitive) {
    primitive += 1;
    console.log("Inside function:", primitive);
  }

  function modifyObject(obj) {
    obj.value += 1;
    console.log("Inside function:", obj.value);
  }

  let num = 5;
  modifyPrimitive(num);
  console.log("Outside function:", num); // Outputs: 5

  let obj = { value: 5 };
  modifyObject(obj);
  console.log("Outside function:", obj.value); // Outputs: 6

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14: Reference Types and How They Are Passed Around

    Problem:

    Write code to demonstrate that objects are passed by reference by creating 
    a function that adds a new property to an object passed as an argument.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function addProperty(obj) {
    obj.newProperty = "I am new!"; // Adds a new property to the object
}

const myObj = { existingProperty: "I exist" };

console.log(myObj); // Outputs: { existingProperty: "I exist" }

addProperty(myObj); // Calls the function to add a new property

console.log(myObj); // Outputs: { existingProperty: "I exist", newProperty: "I am new!" }

// Real world example
function flagRentAsLate(obj) {
    obj["late"] = true; // Adds a 'late' property to the rent object
}

const rentObj = {
    monthlyPayment: 1200,
    monthDue: "November",
    dayDue: 1,
    paid: false,
};

flagRentAsLate(rentObj); // Flags the rent as late

console.log(rentObj); // Outputs: { monthlyPayment: 1200, monthDue: "November", dayDue: 1, paid: false, late: true }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  /* 
   
    Exercise 15: Working with Arrays using 'find'

    Problem:

    Given the array of user objects above, use the find() method to 
    locate the user with the name 'Bob'.

    Print this user object to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const user = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// Use the find() method to locate the user with the name 'Bob'
const userBob = users.find(user => user.name === 'Bob');

// Print the user object to the console
console.log(userBob);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  /* 
   
    Exercise 16: Using Object.entries to Iterate Over Object Properties
    Problem:

    Given the 'person' object above, use Object.entries and .forEach to iterate 
    over the object's properties and print each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW

   // Use Object.entries() to get an array of key-value pairs and iterate over them
    Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    });

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17: Using Functions to Transform Data

    Problem:

    Write a function 'capitalizeStrings' that takes an array of strings and 
    returns a new array with each string in title case
    (first letter uppercase, rest lowercase).
      
  */
  // CODE IN THE OPEN LINES BELOW

  function capitalizeStrings(strings) {
    return strings.map(str => {
        // Capitalize the first letter and make the rest lowercase
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
}

// Example usage:
const inputArray = ["hello", "world", "javaScript", "FUNCTIONS"];
const capitalizedArray = capitalizeStrings(inputArray);

console.log(capitalizedArray); // Outputs: ["Hello", "World", "Javascript", "Functions"]

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18: Using Default Parameters

    Problem:

    Write a function 'power' that calculates the power of a number. 

    The function should take two parameters: base and exponent, 
    with exponent defaulting to 2 if not provided.

    You can use Math.pow in your function to find the power of a number:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  
  */
  // CODE IN THE OPEN LINES BELOW

  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// Example usage:
console.log(power(3));        // Outputs: 9 (3^2)
console.log(power(2, 3));     // Outputs: 8 (2^3)
console.log(power(5, 0));     // Outputs: 1 (5^0)
console.log(power(4, 1));     // Outputs: 4 (4^1)

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Immediate Function: 

    Write an IIFE(Immediately Invoked Function Expression) that 
    that logs information to the console. 
		
    Here's a page with more details on IIFEs:
		https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  
  */
  // CODE IN THE OPEN LINES BELOW

  (() => {
    process.env.DB_PASSWORD = 12345;
    process.env.APP_LANGUAGE = "en-US";
    process.env.APP_VERSION = "DEVELOPMENT";

    console.log("env vars inside the IIFE");
    console.log("DB Password:", process.env.DB_PASSWORD);
    console.log("App Language:", process.env.APP_LANGUAGE);
    console.log(
      "Version of app build currently running:",
      process.env.APP_VERSION
    );
    console.log("--------------");
  })();

  console.log(
    "But LOOK! I can access these env vars outside the IIFE now that they're set up"
  );
  console.log("DB Password:", process.env.DB_PASSWORD);
  console.log("App Language:", process.env.APP_LANGUAGE);
  console.log(
    "Version of app build currently running:",
    process.env.APP_VERSION
  );
  console.log("--------");

  // CODE IN THE OPEN LINES ABOVE
}
}