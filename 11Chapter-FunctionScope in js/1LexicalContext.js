//Lexical Context provide information about the function scope, means which varibales and functions a function can access.
//For example, a child function can access all the variables of a parent function.
function Parent() {
  let x = 10;
  let y = 20;
  function Child() {
    console.log(x); //10
    console.log(y); //20
  }
  Child();
}

//A child function can also access all the functions of a parent function.
function Parent2() {
  function Child1() {
    console.log("Child1 inside Parent function"); //
  }
  Child1();
  function Child2() {
    console.log("This is Child2 inside Parent function");
    console.log("Calling Child1 from Child2 ");
    Child1();
  }
  Child2();
}
