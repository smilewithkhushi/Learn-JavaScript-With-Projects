// DAY 3 : EXPRESSIONS AND OPERATORS
/*
 *      EXPRESSIONS - it is a combination of operands and operators that has a meaning
        OPERATORS - the symbols that perform arithmetic, logical, relational or any mathematical tasks in javascript
        TYPES OF OPERATORS -
        -> ARITHEMETIC OPERATORS :+, / , - , *, **, %
        -> RELATIONAL OPERATORS : >= , <= , > , <
        -> COMPARISION OPERATORS :  ==, !=, !==, ===
        -> LOGICAL OPERATORS : && , || , !
 */

//ARITHMETIC OPERATORS

console.log("\n** ARITHMETICs OPERATORS ** ");
let a=45;
let b=4;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a ^ b = ", a**b);
console.log("a % b = ", a%b);
console.log("a ++ = ", a++);
console.log("a -- = ", a--);
console.log("++b = ", ++b);
console.log("--b = ", --b);

//ASSIGNMENT OPERATORS
console.log("\n** ASSIGNMENT OPERATORS ** ");
a=10;
console.log("\na = ", a);
console.log("b = ", b);
console.log("a += b : ", a+=b);
a=10;
console.log("a -= b : ", a-=b);
a=10;
console.log("a *= b : ", a*=b);
a=10;
console.log("a /= b : ", a/=b);

//COMPARISION OPERATORS
console.log("\n** COMPARISION OPERATORS ** ");
a=109;
b="109";
console.log("\na = ", a, "type = ", typeof(a));
console.log("b = ", b , "type = ", typeof(b));
console.log(" a == b : ", a==b);
console.log(" a != b : ", a!=b);
console.log(" a === b : ", a===b);
console.log(" === operator returns true only if the value and the data type of variable are same");
console.log(" a !== b : ", a!==b);
console.log(" !== operator is reverse of ===, returns true only if the value and the data type of variable are not same");

//LOGICAL OPERATORS
console.log("\n** LOGICAL OPERATORS ** ");
a=199;
b="110";
console.log("\na = ", a, ", type = ", typeof(a));
console.log("b = ", b , ", type = ", typeof(b));
console.log(" a==5 && a>b : ", a==5 && a>b);
console.log(" a==5 || a>b : ", a==5 || a>b);
console.log(" !false : ", !false);
console.log(" !true : ", !true);

//TYPEOF OPERATOR

console.log("\n** TYPE OF OPERATOR ** ");
console.log("typeof(a) : ", typeof(a));
console.log("typeof(b) : ", typeof(b));