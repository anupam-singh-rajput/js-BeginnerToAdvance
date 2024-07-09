function emailTo(to) {
  return function (subject) {
    return function (body) {
      return `${to + " " + subject + " " + body}`;
    };
  };
}
// let dev1 = emailTo("asr@gmail.com")
// let dev2 = dev1("Grettings");
// let dev3 = dev2("Namaste, or kya haal chal hai")

// const email = to => subject => body => `${to+" "+subject+" "+body}`;
// let dev1 = emailTo("asr@gmail.com")
// let dev2 = dev1("Grettings");
// let dev3 = dev2("Namaste, or kya haal chal hai")

let CompleteEmail =
  emailTo("anupam@gmail.com")("Namaste")("Hello kaise ho aap");
console.log(CompleteEmail);

//---------------------------------Real UseCase finding a user from users Document ------------------------------------------------------------
let users = [
  {
    id: 1,
    name: "Anupam",
    email: "anupam@gmail.com",
  },
  {
    id: 2,
    name: "Anmol",
    email: "anmol@gmail.com",
  },
  {
    id: 3,
    name: "Anshul",
    email: "anshul@gmail.com",
  },
];

function Users(usersArr) {
  return function (name) {
    return usersArr.find(function (ele) {
      if (ele.name == name) {
        return true;
      }
    });
  };
}

let find = Users(users)("Anupam");
console.log(find);
