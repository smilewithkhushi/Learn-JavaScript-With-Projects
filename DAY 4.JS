/*
 *  CONDITIONAL STATEMENTS 
    -> IF ... ELSE
    -> IF ..ELSE IF .. ELSE

 * 
 */
//prompt() is used to take input from user
//alert() is used to show an alert popup to the user
const prompt=require("prompt-sync")();
let num = prompt("-> Enter your age : ");
num=Number.parseInt(num);     //Converts the string to number
console.log("Age entered : ", num, ", Type : ", typeof(num) );

if (num>18){
    alert("You are eligible to vote!");
}else if (num==18){
    alert("You are 18 years of old! Cast your first vote!");
}else{
    alert("You are not eligible to vote");
}