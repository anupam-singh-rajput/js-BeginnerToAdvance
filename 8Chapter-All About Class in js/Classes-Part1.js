//So in object we can access object property before creating it and we can also change its value.
let Parent = {
  name: "parent",
  setState: function (num) {
    Parent.state.count = num;
    // console.log(this.state.count);
  },
  state: {
    count: 1,
  },
};

let child = {
  name: "child",
  set: function () {
    child.setState(20);
  },
};
child.__proto__ = Parent;

// ----------------------This is what really happening behind the hood ---------------
// let child = {
//     name : "child",
//     set : function(){
//         this.setState(20);
//     }
//         -----------------------------
//         name:"parent",
//         setState : function(num){
//             Parent.state.count = num;
//             console.log(this.state.count);
//         },
//         state : {
//             count:1,
//         }
//         -----------------------------------------
// }

//Things to remember in class.
//We can define a variable inside class using static keyword only,
//while defining function outside of constructor don't write function keyword but
//remember to create that name of the fun inside constructor( e.g this.set;).
//The super keyword will dump every methods and property of ParentClass
//cons in ChildClass cons.
//Propert and methods of the child constructor will override the props and methods
//of parentClass if they are of same name.
//Most IMP : Now whenever you are creating a class or creating child class always
// remember that all the props and methods of both the classes are going to inside
//constructor, because of that the value of this keyword will always be same for
//both the class, as one object is going to create in the end using both the class
//and thus it will be going to inherit all the props and methods of both the class.
class ParentClass {
  constructor() {
    this.state = {};
  }
  setState = function (newState) {
    this.state = { ...this.state, ...newState };
  };
}
class ChildClass extends ParentClass {
  static clear;
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.start;
    this.stop;
  }
  start() {
    ChildClass.clear = setInterval(() => {
      let { count } = this.state;
      this.setState({ count: count + 1 });
      console.log(this.state.count);
    }, 1000);
  }
  stop() {
    clearInterval(ChildClass.clear);
  }
}

let objet = new ChildClass();
