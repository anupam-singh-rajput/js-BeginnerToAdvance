// (function(){
//     let obj1 = {
//         name:"Object inside fun",
//         age:30,
//         address:"India",
//         about:function(){
//             console.log("This is about method");
//         }
//     }
//     return obj1;
// })()

var get_IIFE = (function () {
  let num = 20;
  return {
    getter: function () {
      console.log(num);
    },
    setter: function (n) {
      num = n;
    },
  };
})();

get_IIFE.getter();
get_IIFE.setter(40);
get_IIFE.getter();
//-----------------------Behind The Hood--------------------
// get_IIFE = {
//     getter : function(){
//             console.log(num);
//         },
//         setter : function(n){
//             num = n;
//         }
// }
