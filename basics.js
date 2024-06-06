// main.js

// Introduction
console.log("Welcome to my JavaScript Learning Repository!");

// Variable declarations
let message = "Hello, World!";
const pi = 3.14159;
var counter = 0;

// Function to display a greeting
function greet(name) {
    return `Hello, ${name}!`;
}

// Using the function
let name = "Alice";
console.log(greet(name));

// Array operations
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Add an element to the array
numbers.push(6);
console.log("Array after push:", numbers);

// Remove the last element
numbers.pop();
console.log("Array after pop:", numbers);

// Loop through the array
console.log("Loop through the array:");
numbers.forEach((num) => {
    console.log(num);
});

// Simple object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties and methods
console.log("Person's full name:", person.fullName());
console.log("Person's age:", person.age);

// Basic conditional
if (person.age > 18) {
    console.log(person.fullName() + " is an adult.");
} else {
    console.log(person.fullName() + " is a minor.");
}

// Basic loop
console.log("Basic loop:");
for (let i = 0; i < 5; i++) {
    console.log("Counter: " + i);
}

// End of the script
console.log("End of the script.");
