let result = true;

//Only if
if (result) {
  console.log("result value is true");
}

result = false;
//if-else
if (result) {
  console.log("result value is true");
} else {
  console.log("result value is flase");
}

//if , else-if, else;
let publicWashroom1 = "Male";
let publicWashroom2 = "Female";

let person = "";
let personTwo = "";

if (publicWashroom1 == person) {
  console.log("You can enter");
} else if (publicWashroom2 == personTwo) {
  console.log("You can enter");
} else {
  console.log("Chal nikal bsdk");
}

///Nested if-else
let school1 = "GirlsSchool";
let school2 = "BoysSchool";
let person1 = "Girl";
let person2 = "Boys";

if ((school1 = "GirlsSchool")) {
  if ("Girl" == person2) {
    console.log("You can enter");
  } else if ("Girl" == person2) {
    console.log("You can enter");
  } else {
    console.log("Go to male washroom");
  }
} else if ((school2 = "BoysSchool")) {
  if ("Boys" == person1) {
    console.log("You can enter");
  } else if ("Boys" == person2) {
    console.log("You can enter");
  } else {
    console.log("Warning school is not suitable for you");
  }
} else {
  console.log("What are you rainbow");
}
