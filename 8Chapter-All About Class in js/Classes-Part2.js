class getSet {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get() {
    console.log(this.email);
  }
  set(email) {
    this.email = email;
  }
}
let obj1 = new getSet("asr@gmail.com", "qwerhtrewq");
obj1.get();
obj1.set("anupam@gmail.com");
obj1.get();
