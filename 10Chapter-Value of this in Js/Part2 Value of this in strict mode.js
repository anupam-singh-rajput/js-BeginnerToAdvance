
// Strict Mode Behavior
// Strict mode ke andar, `this` ka behavior kuch alag hota hai compared to non-strict mode.
// 1. Global Scope: Strict mode mein, global scope mein `this` ka value `undefined` hota hai, jabki non-strict mode mein yeh global object (`window` in browsers) ko refer karta hai. Example:
"use strict";
console.log(this); // Output: undefined
    
// 2. Function Scoped: Strict mode mein, bina explicit context ke ek function ke andar `this` ka value bhi `undefined` hota hai. Non-strict mode mein, global object ko refer karta hai. Example:
"use strict";
function abcd() {
    console.log(this); // Output: undefined
}
abcd();

// 3. Method Scope: Method ke andar, strict mode ya non-strict mode mein, `this` method ke parent object ko refer karta hai. Example:
"use strict";
var obj = {
    name: "Anupam",
    method: function() {
        console.log(this, this.name); // Output: Object {name: "Anupam"} Anupam
    }
};
obj.method();
    

// 4. Event Handlers: Event handlers mein, strict mode ke andar bhi `this` typically us element ko refer karta hai jispe event occur hua hai. Example:
"use strict";
var btn = createElement('input[type="button"]');
document.querySelector("btn").onclick = function() {
    console.log(this); // Output: Click me
};
    

// 5. Arrow Functions: Arrow functions mein, strict mode ya non-strict mode mein, `this` lexical scope se inherit hota hai. Global scope mein, yeh value `undefined` hoti hai. Example:
"use strict";
const arrowFunc = () => {
    console.log(this); // Output: undefined
};
arrowFunc();
    


