// Global Scope

// Jab aap `this` ko global scope mein use karte hain, toh woh global object ko refer karta hai,   jo ki browser mein `window` hota hai. 
// Example:

console.log(this); // Output: Window object (browser mein)

// Function Scoped
// Agar aap ek function mein `this` ko use karte hain, toh woh bhi global object ko refer karta hai, agar woh function ek strict mode function nahi hai. Example:

function abcd() {
    console.log(this); // Output: Window object (browser mein)
}
abcd();
    

// Method Scope
// Jab `this` ko ek method mein use kiya jata hai, toh woh method ke parent object ko refer karta hai, jaise aapne sahi tarah se kaha. Example:

var obj = {
    name: "Anupam",
    method: function() {
        console.log(this, this.name); // Output: Object {name: "Anupam"} Anupam
    }
};
obj.method();
    
// Event Scope
// Jab aap ek event handler ke andar `this` ka use karte hain, toh `this` typically us element ko refer karta hai jispe event occur hua hai. Example:

<button>ClickMe</button>
document.getElementById("myButton").onclick = function() {
    console.log(this); // Output: <button>ClickMe</button>
};
    
// In Arrow Functions
// Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical scope (Arrow functions mein, `this` ka value surrounding lexical scope se inherit hota hai). In other words, the value of `this` inside an arrow function is determined by the enclosing non-arrow function where the arrow function is defined. Example:

let name = () => {
    console.log(this); // [object Window]
};
name();
    


const obj = {
    name: "Anupam",
    regularFunc: function() {
        console.log("Inside regularFunc:", this.name); // Output: Inside regularFunc: Anupam
    },
    arrowFunc: () => {
        console.log("Inside arrowFunc:", this.name); // Output: Inside arrowFunc: undefined
    }
};

obj.regularFunc(); // Inside regularFunc: Anupam
obj.arrowFunc();   // Inside arrowFunc: undefined
    

