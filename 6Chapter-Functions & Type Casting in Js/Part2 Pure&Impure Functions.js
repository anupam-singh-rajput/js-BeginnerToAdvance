// Pure aur impure functions
// Pure aur impure functions programming mein ek important concept hain, jo function ke behavior ko define karte hain.

// Pure Function:
// - Ek function ko pure kaha jata hai agar ye do conditions ko satisfy karta hai:
// 1. Deterministic: Ek pure function hamesha deterministic hota hai, matlab ye hamesha same input ke liye same output produce karta hai.
// 2. Side-effect free: Pure function kisi external state ko modify nahi karta hai, jaise global variables ya mutable objects ko change nahi karta.
// Example of a pure function:
function add(a, b) {
  return a + b;
}
// Is function add() pure hai, kyun ki:
// - Har samay jab bhi same inputs diye jaye (jaise add(2, 3)), hamesha same output return karta hai.
// - Ismein koi external state modify nahi hoti.

// Impure Function:
// Impure function ek ya dono conditions ko violate karta hai jo pure function define karte hain. Yeh functions side effects produce karte hain ya phir deterministic nahi hote.
// Example of an impure function:
let result = 0;
function addToResult(num) {
  result += num;
  return result;
}
// Is function addToResult() impure hai, kyun ki:
// - Ye external state (result variable) ko modify karta hai.
// - Is function ka output deterministic nahi hai, kyunki result ki value har function call ke baad change hoti hai.

// Impure functions ko use karte waqt aapko dhyan rakhna padta hai ki unke side effects se kaise deal karna hai, aur ye unpredictable behavior introduce kar sakte hain, especially in concurrent programming ya testing mein. Pure functions, on the other hand, predictable hote hain aur unka use maintainability aur testability ko improve karta hai.
