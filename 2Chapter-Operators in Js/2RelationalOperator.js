//1.Relational Operator (==, !=, >, <, >=, <=,):
//Relational Operator ka output hamesa true ya false hota hai.
let operand1 = 20;
let operand2 = 10;
let operand3 = 20;

//1.
// == EqualTo( If value of both the operands are equal then return true else return false)
console.log(operand1 == operand2); //false
// != EqualTo( If value of both the operands are equal then return false else return true)
console.log(operand1 != operand2); //true

//2.
// > GreaterThen( If value of operand1 is greater than value of operand2 then return true else return false)
console.log(operand1 > operand2); //true
// < EqualTo( If value of operand1 is smaller than value of operand2 then return true else return false)
console.log(operand1 < operand2); //false

//3.
// >= GreterThenOrEqualTo( If value of operand1 is greater than value of operand3 then return true else return false Or if value of operand1 is equal to value of operand3 then also return true else return false))
console.log(operand1 >= operand3); //true (operand1 is not greater but it is equal to operand3)
// <= LessThenOrEqualTo( If value of operand2 is smaller than value of operand3 then return true else return false Or if value of operand2 is equal to value of operand3 then also return true else return false))
console.log(operand2 <= operand3); //false (operand2 is not less and it is not equal to operand3 also)

//All In One
console.log(operand1 == operand2); //false
console.log(operand1 != operand2); //true
console.log(operand1 > operand2); //true
console.log(operand1 < operand2); //false
console.log(operand1 >= operand3); //true (operand1 is not greater but it is equal to operand3)
console.log(operand2 <= operand3); //false (operand2 is not less and it is not equal to operand3 also)
