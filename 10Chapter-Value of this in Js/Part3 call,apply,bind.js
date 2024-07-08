// Explicit Binding
// Explicit binding JavaScript mein `this` ko specifically ek object se bind karne ke liye istemal hota hai. Yeh three methods provide karte hain:
// call()
// apply()
//bind()

//1.call -
//call() method se hum function ko call karte hai,
//Lekin call karte jo argument pass kiya jayega through call method wo this ka value banjata hai.
function hello() {
  console.log("Value of this ", this); //window
  console.log(`hello ${this.name} ${this.nextLine} \n`);
}
hello(); //Calling function with call method.
//Abhi aap function ke andar this ka value wahi window hai.
let person = {
  name: "Anupam",
  nextLine: "\n",
};
hello.call(person); //Calling function with call method
//lekin call method ke through this person object ko represent kar raha hai iska matlab this.name asliyat me obj.name hai.

//2.apply -
//apply() method same hai call method se leki apply method me ham extra arguments bhi de sakte hai function ke liye and wo sab argument as a array jata hai .
function hello2(...args) {
  console.log("Value of this ", this); //function
  console.log(`hello ${this.name}`);
  for (let ele of args) {
    console.log(ele);
  }
}
hello2(); //Calling function with call method.
//Abhi aap function ke andar this ka value wahi function hai, this=hello(){...}.
let person2 = {
  name: "Anmol",
};
hello2.apply(person2, [1, 2, 3, 4, 5, 6]); //Calling function with call method
//lekin call method ke through this obj object ko represent kar raha hai iska matlab this.name asliyat me obj.name hai.

//3.bind -
//bind() method call() aur apply() method se alag hai, agar aap bind() method ke through function call karoge and call karte waqt usme obj pass kiya to bind method us function me this value ko to change kardega but wo function ko call karne jagha aapko return kardega
function hello3() {
  console.log(`${this.nextLine} \n Value of this ${this}`); //function
  console.log("hello ", this.name);
}
let person3 = {
  name: "Shivam",
  nextLine: "\n",
};
let result = hello3.bind(person3);
result();
console.log(result);
//asliyat me kuch ayesa hai bind function hello3 ke pass gaya usme this ki value ko change kiya and function hello3 ko uthaya hai and return kardiya jisko hum result variable me assign kar rahe hai.

//result = function hello3(){
// console.log("Value of this", this);
// console.log("hello ",this.name);
//}
//Ab reult variable me ek function hai to usko execute karne ke liye result variable ko call karna padega like this result().
