// Type Casting
// Typecasting ka matlab hota hai ek data type ko doosre data type mein convert karna. JavaScript mein, typecasting do tarike se hota hai: implicit (automatic) aur explicit (manual).

// Explicit Typecasting (Manual) or Type Conversion (Explicit Typecasting):
// Developer khud data type ko convert karta hai using JavaScript functions.
// Type conversion or Explicit Typecasting wo process hai jismein developer khud manually data type ko convert karta hai using built-in functions ya methods. Isko explicit typecasting bhi kaha jata hai.
var a = "123";
var b = Number(a); // String ko number mein convert karna
console.log(b); // Output: 123
var c = 456;
var d = String(c); // Number ko string mein convert karna
console.log(d); // Output: "456"

// Implicit Typecasting (Automatic) or Coercion (Implicit Typecasting):
// JavaScript automatically data types ko convert kar deta hai jab zaroorat hoti hai
// Coercion or Implicit Typecasting wo process hai jismein JavaScript automatically (implicitly) data type ko convert kar deta hai jab zaroorat hoti hai. JavaScript apne aap hi kuch operations ke dauran types ko badal deta hai.
var x = 5;
var y = "10";
var result = x + y; // Number ko string mein convert karke concatenate karta hai
console.log(result); // Output: "510"
var a = "5";
var b = 3;
var sum = a - b; // String ko number mein convert karke subtraction karta hai
console.log(sum); // Output: 2

// Examples of All Conversions Together:
// String to Number
var str = "456";
var num = Number(str);
console.log(num); // Output: 456

// Number to String
var num = 789;
var str = String(num);
console.log(str); // Output: "789"

// Boolean to Number
var bool = true;
var num = Number(bool);
console.log(num); // Output: 1

// Number to Boolean
var num = 0;
var bool = Boolean(num);
console.log(bool); // Output: false

// String to Integer
var str = "123abc";
var intNum = parseInt(str);
console.log(intNum); // Output: 123

// String to Float
var str = "123.45abc";
var floatNum = parseFloat(str);
console.log(floatNum); // Output: 123.45
