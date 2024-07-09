// Arrow Function

// Arrow functions JavaScript mein functions ko define karne ka ek concise tareeka hain. Ye ES6 (ECMAScript 2015) mein introduce hua tha. Arrow functions traditional function expressions ke ek alternative hain, jo kuch situations mein code ko chhota aur readable banane mein madad karte hain.
// Syntax:
// Single parameter arrow function
const functionName1 = (parameter) => {
  // function body
};

// Multiple parameters arrow function
const functionName2 = (parameter1, parameter2) => {
  // function body
};

// Arrow function with implicit return
const functionName3 = (parameter) => expression;

// Arrow function with block body and explicit return
const functionName4 = (parameter) => {
  return expression;
};

// Traditional function
function add(a, b) {
  return a + b;
}
// Arrow function
const add = (a, b) => a + b;

// Arrow functions mein this keyword global context ko refer karta hai, isliye object ke andar arrow function ka use karne par this object ko refer nahi karega. Is tarah ke cases mein, traditional function expressions ka use karna better hota hai.
