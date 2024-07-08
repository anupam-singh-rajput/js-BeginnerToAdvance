let obj = {};
// console.log(obj);

//If the keys are not there then create one and initialize with the given value.
//If the keys are already in the object then change it value to the current one.
obj.fname = "Anupam";
obj.lname = "Singh";
// console.log(obj);

let obj2 = {
  ...obj, //obj object ki saari properties or methods yaha pe laake daaldo.
  greet: function () {
    console.log("Hello " + this.fname + this.lname);
  },
};
// console.log(obj2);
// console.log(obj2.greet());

//Creating obj using function.
function createObject(name, hail) {
  this.name = name;
  this.hail = hail;
}

//prototype object is used to add property and methods in the constructor function.
createObject.prototype.about = "Avatar of Bhagwan Vishnu";
createObject.prototype.greet = function () {
  console.log(this.name + " " + this.hail);
};

let Vavatar1 = new createObject("RajaRamchandra", "ki jai");
console.log(Vavatar1);
let Vavatar2 = new createObject("Kanhayiya", "lal ki jai");
console.log(Vavatar2);

console.log(Vavatar1.greet());
console.log(Vavatar2.greet());

// prototypeInheritance or prototype chaining is used to add properties and methods of other object into our object.

let Human = {
  walk: true,
  run: true,
  eat: true,
  sleep: true,
};

let personal = {
  name: "Anupam",
};

personal.__proto__ = Human;
// console.log(personal);
