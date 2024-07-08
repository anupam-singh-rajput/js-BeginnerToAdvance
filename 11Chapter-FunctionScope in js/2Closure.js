//When we return a child function the child still have the access of all the variables and functions of the parent functions.
//Because we in reality we actually return a lexical scope not just a child function.

//For example, a child function can still access all the variables of a parent function from outside.
function Parent() {
  let x = 10;
  let y = 20;
  return function Child() {
    console.log(x); //10
    console.log(y); //20
  };
}

let getParent = Parent();

//A child function can also still access all the functions of a parent function from the outside.
function Parent2() {
  function Child1() {
    console.log("Child1 inside Parent function"); //
  }
  Child1();
  return function Child2() {
    console.log("This is Child2 inside Parent function");
    console.log("Calling Child1 from Child2 ");
    Child1();
  };
}
