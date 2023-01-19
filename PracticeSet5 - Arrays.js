/*
QUES 1 :: WRITE  A PROGRAM TO CREATE AN ARRAY OF NUMBERS INPUT FROM THE USER. THEN ADD THE ELEMENTS IN THE ARRAY

QUES 2 :: Keep adding numbers to the array in Ques 1 until 0 is added to array

QUES 3 :: Filter the numbers divisble by 10 from a given array

QUES 4 :: Create an array of square of given numbers

QUES 5 :: Use reduce to calcualte factorial of the given number from an array of first n natural numbers

*/

const prompt=require("prompt-sync")();

//Ques 1 :: 
let numCount, ele;
let arrayNum=[];

console.log("\n QUESTION 1 :: CREATING A USER DEFINED ARRAY & CALCULATING SUM");
numCount=prompt("-> Enter numbers of element for the array : ");

for (let i=0; i<numCount; i++){
    ele=prompt("Enter the element : " );
    ele=parseInt(ele);
    arrayNum.push(ele);
}

let arrNew = arrayNum.reduce((a, b)=>{
    return a+b;
})

console.log("Entered array : ", arrayNum);
console.log("Sum of all elements in above array : ",arrNew);


console.log("\n QUESTION 2 :: ADD NUMBER TO ARRAY UNLESS 0 IS ADDED");
console.log("Enter ",numCount, " elements -> ");
arrayNum=[];
for (let i=0; i<numCount; i++){
    ele=prompt(" Enter element : ");
    if (ele==0){
        break;
    }
    arrayNum.push[parseInt(ele)];
}
console.log(" Entered array = ", arrayNum);