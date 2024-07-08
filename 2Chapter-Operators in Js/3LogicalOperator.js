//Logical Operator(&&,||,!)
//&& - Logical And
//|| - Logical Or
//! - Logical Not

//And returns true when both the condition are true else it will return false.
//Or returns true when anyone of the condition is true else it will return false.
//! ye koi bhi diye huhe logic ko ulta kardeta hai.

let a = true;
let b = false;
let result;

//Working of Logical And
//Statement1 | Statement2  | Return
//true       | true        | true
//false      | false       | false
//true       | false       | false
//false      | true        | false
result = a && b; // true && false = false
console.log(result); //false

//Working of Logical Or
//Statement1 | Statement2  | Return
//true       | true        | true
//false      | false       | false
//true       | false       | true
//false      | true        | true
result = a || b; //true || false = true
console.log(result); //true

//Working of Logical Not
result = a && b; // true && false = false
console.log(result); //false
console.log(!result); //But !false = true; (Not false means it is true)
