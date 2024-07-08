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
