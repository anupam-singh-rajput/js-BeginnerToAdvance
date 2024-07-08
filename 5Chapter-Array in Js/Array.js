var arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.push(9);
console.log(arr);
arr.unshift(0);
console.log(arr);

arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

//push(), pop(), shift(), unshift();

//forEach() method only use for looping cannot able to return any value.
//map() method used for returning a value.
//find() method only return the 1st element of the array which meets the condition.
//findIndex() method return the index of the 1st ele of the array which meets the condition.
//filter() method return all the ele of the array which meets the condition.
//includes() method return true for the 1st element of the array which meets the condition.
//slice() is exactly similar to subString() method.
//splice() is similar to slice(means it used create a subarray from original array) but it will remove those ele from the original array.

//forEach() method ke through aap chahke bhi kabhi kuch return nahi karsakte hai.
// var arrTwo = arr.forEach(function(ele,index,wholearray){
//     console.log(ele);
//     return ele;
// })
// console.log(arrTwo);

//map() method ke through hum ek new array return kar sakte hai.
// var arrThree = arr.map(function(ele){
//     console.log(ele);
//     return ele;
// })
// console.log(arrThree);

//find() method array me koi value return karta hai.
// var arrFour = arr.find((ele) => ele%2 == 0)
// console.log(arrFour);

//filter() method
// var arrFive = arr.filter(function(ele){
//     if(ele%2 == 0 ){
//         return ele;
//     }
// })
// console.log(arrFive);

//include()
// var arrSix = arr.includes(4);
// console.log(arrSix);

//slice()
// var arrSeven = arr.slice(1,5);
// console.log(arrSeven);

//splice()
// var arrEight = arr.splice(1,5);
// console.log(arrEight);
// console.log(arr);

//join() method arr ko string banadeta hai
// var arrString = arr.join(',');
// console.log(arrString);

//split() method string ko array banadeta hai.
// console.log(arrString.split(','));
