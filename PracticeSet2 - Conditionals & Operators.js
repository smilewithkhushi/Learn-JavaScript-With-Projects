/* PRACTICE SET 2 : CHAPTER 2 (EXPRESSIONS, OPERATORS AND CONDITIONAL STATEMENTS)
 */

//QUES 1 :: USING LOGICAL OEPRATOR FIND WHETHER THE AGE FO A PERSON LIES BEWEEN 10 AND 20

const prompt=require("prompt-sync")();
let age=prompt("-> Enter an age : ");
//using ternary operator
console.log((age>10 && age<20) ? "Age lies between 10 and 20" : "Age does not lie between 10 and 20");

//QUES 2 :: DEMONSTRATE USE OF SWITCH CASE STATEMENTS IN JAVASCRIPT

//QUES 3 :: WAP A JAVASCRIPT PROGRAM TO FIND WHETHER A NUMBER IS DIVISBLE BY 2 AND 3 or by either of them
let num=prompt("\n-> Enter a number : ");
if (num%2==0 && num%3==0){
    console.log(num, " is divisible by 2 and 3");
}
else if (num%2==0 && num%3!=0){
    console.log(num, " is Divisible by 2")
}
else if (num%3==0 && num%2!=0){
    console.log(num, " is divisible by 3");
}else{
    console.log(num, " is divisible by neither 2 nor 3");
}

//QUES 5 :: PRINT YOU CAN DRIVE AND YOU CANT DRIVE IF AGE IS GREATER OR SMALLER THAN 18 RESPECTIVELY USING TERNARY OPERATOR
age=prompt("-> Enter your age here : ")
console.log((age>18)? "You can drive!" : "You cannot drive!");

//QUES 5 :: 

