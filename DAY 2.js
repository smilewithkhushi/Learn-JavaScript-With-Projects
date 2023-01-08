/*
DECLARING VARIABLES IN JAVASCRIPT : var, let and const

* VAR - declares the variable in Global scope and can be reassigned (but not redeclared)
* LET - declares the variable in BLOCK SCOPE and it can be reassigned (but not redeclared)
* CONST - declares the variable in BLOCK SCOPE and it has a fixed value
*/
const author="ken";
var a=100;
let b=100;
a=300;
console.log("a=", a);
b=200;
console.log("b=", b);
console.log("const author = ", author);
author="kaneki";
//error in line 16

/*  DATA TYPES IN JAVASCRIPT
-> Strings and characters
-> Integers
-> Floating numbers
-> Object / dictionary { }
-> Null
-> Undefined
-> Boolean (True or false)

*/

let string="String one";
let bool=true;
let integer=23;
let floating=78.67;
let character='A';
let nulltype=null;
let undef=undefined;
let obj={
    name : "Kenny",
    class: 10
}
console.log("Object type = ", obj);
console.log("string type = ", string);
console.log("bool type = ", bool);
console.log("integer = ", integer);
console.log("floating = ", floating);
console.log("character = ", character);
console.log("null type = ", nulltype);;
console.log("undefined type = ", undef);