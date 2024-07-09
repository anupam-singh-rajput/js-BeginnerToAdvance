//navigator object ke through apna geolocation findout kar sakte hai.

//Location in js
console.log(window.navigator.geolocation);

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Get Current Position ", position);
  console.log("\nGet coords", position.coords);
  console.log(
    "\nGet Latitude and longitude",
    position.coords.latitude,
    position.coords.longitude
  );
});

//Math.random() hamesa zero se leke 1 ke bichka value return karta hai
//kabhi bhi 0 ya 1 return nahi karega
let random = Math.random();
console.log(random);
//floor point ke aage wali value deta hai
let floor = Math.floor(random * 10);
console.log(floor);

//suareroot findout karta hai.
console.log(Math.sqrt(64));
