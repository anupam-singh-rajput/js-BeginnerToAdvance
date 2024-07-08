//Functions JavaScript mein ek block of code hote hain jo ek specific task ko perform karne ke liye design kiye gaye hote hain. Functions ke andar declare kiye gaye variables aur functions sirf us function ke andar hi accessible hote hain.

// Functions Declaration and Defination
// 1. Function Declaration
// Syntax:
function functionName() {
  console.log("Hello!");
}
//Function Call( function ke andar ki chiz(function defination) tabhi execute hogi jab function ko call karenge warna function shirf bytecode me convert hoke ayese hi pada rahega)
functionName();
//Functions ko call karne ke liye function ka naam aur circular brackets() use kiya jata hai:

// 2. Function Defination
//functionName() {
//    console.log("Hello!");
//}
// function keyword ka baad jo likha hai us puri chiz ko hi function Defination bolte hai

//3. Function Body
//{
//    console.log("Hello!");
//}
// Ye jo curly braces jaha se start huha hai to jaha pe end hoga use bolte hai function ki puri body

//1. Function with Parameters
// Function ko call karte hain aur usme ek value provide karte hain, toh hum us value ko "argument" kehte hain. Aur jab hum function ko define karte hain, toh hum wahi value ko accept karne ke liye ek placeholder ya variable ko define karte hain, jise hum "parameter" kehte hain.
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
// Is example mein, name ek parameter hai jo greet function ke andar define kiya gaya hai. Jab hum greet("Alice") ko call karte hain, toh "Alice" ek argument ke roop mein function ko pass kiya jata hai. Is tarah se, "Alice" argument function ke andar name parameter ke value ke roop mein receive hota hai, aur phir function us value ka use karke "Hello, Alice!" string ko generate karta hai.

// Isi tarah se, jab hum kisi function ko call karte hain, toh hum us function ke liye arguments provide karte hain, aur jab hum function ko define karte hain, toh hum uske liye parameters define karte hain jo un arguments ko receive karte hain.

// 2. Return Values
// Jab ek function kisi value ko generate karta hai aur use function ke bahar tak pahuchana chahta hai, toh hum return keyword ka istemal karte hain. Is keyword ke istemal se function execution stop ho jata hai aur control wapas us jagah par aata hai jahan se function ko call kiya gaya tha isi ke wajha se return statement ke baad kuch bhi likha ho function me wo nahi run hota hai.
function add(a, b) {
  return a + b;
  console.log("Ye console execute nahi hoga");
}
//return a + b; is puri chiz ko return statement bolte hai means jaha pe ; hai waha tak return statement hai and iske baad kuch execute nahi hoga.
var result = add(3, 5);
console.log(result); // Output:8
// // Is example mein, add function a aur b ke values ko add karke ek value generate karta hai, aur fir us value ko return keyword se wapas bhejta hai. Jab hum add(3, 5) ko call karte hain, toh function 8 ko generate karta hai aur wapas us jagah par le jata hai jahan se call kiya gaya tha. Is tarah se, hum add function ka value result variable mein store kar sakte hain aur us result ko baad mein use kar sakte hain.
// // return keyword ke istemal se, function execution ko khatam kar diya jata hai, aur function se wapas control us jagah par aata hai jahan se wo call hua tha.

// 3. Default Parameters
// Default parameters ka use kar ke aap function parameters ke liye default values define kar sakte hain. Agar function call karte waqt koi argument pass nahi hota, to default value use hoti hai.
// Syntax:
function functionName(
  param1 = defaultValue1,
  param2 = defaultValue2,
  paramn = defaultValueN
) {
  // function body
}
// Example:
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
greet(); // Output: Hello, Guest!
// Explanation:
// • name parameter ke liye default value "Guest" define ki gayi hai.
// • Jab function greet("Alice") call hota hai, to name ki value "Alice" hoti hai.
// • Jab function greet() call hota hai bina kisi argument ke, to name ki default value "Guest" use hoti hai.

// 4. Rest Parameters
// Rest parameters ka use kar ke aap function ko  number of arguments pass kar sakte hain. Yeh arguments ek array ke roop mein function ko milte hain. Rest parameter ko define karte waqt parameter name se pehle ... (spread operator) lagaya jata hai.
// Syntax:
function functionName(...restParam) {
  // function body
}
// Example:
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
// Explanation:
// • sum function rest parameter numbers ko define karta hai jo ek array hoti hai.
// • Function ko pass kiye gaye saare arguments numbers array mein store hote hain.
// • Loop ke through numbers array ke saare elements ko add karke total return hota ha

// 5.Function length;
function Length(a, b, c, d, e, f, g, h, i, j, k) {
  console.log(Length.length);
}
Length(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Function Length is equal to the number of paramter you define in the function defination.
//Function Length ise nahi decide hote hai ki aap function ko call karte waqt kitne arguments pass kar rahe hai balki ise decide hoti hai ki function me kitne parameters hai.
