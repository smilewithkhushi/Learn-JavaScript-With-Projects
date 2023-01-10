/* FOR VS CODE - INSTALL THE NODE JS LIBRARY PACKAGE FIRST TO TAKE INPUT
 * npm init
   npm install prompt-sync
 */

/*
 *  CONDITIONAL STATEMENTS 
    -> IF ... ELSE
    -> IF ..ELSE IF .. ELSE
 * 
 */

    // (expression) ? <statement 1> : <statement 2> is the ternary operator same as java
//prompt() is used to take input from user
//alert() is used to show an alert popup to the user

const prompt=require("prompt-sync")();
let num = prompt("-> Enter your age : ");
num=Number.parseInt(num);     //Converts the string to number
console.log("Age entered : ", num, ", Type : ", typeof(num) );

if (num>18){
    console.log("You are eligible to vote!");
}else if (num==18){
    console.log("You are 18 years of old! Cast your first vote!");
}else{
    console.log("You are not eligible to vote");
}

console.log((num>18)? "You are also eligible to drive!" : "You are not even eligible to drive yet");