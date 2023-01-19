/**     PRACTICE SET 3 :: LOOPS AND FUNCTIONS
 * 
 */

function calcMean(arr){
    let sum=0, count=0;
    for (x of arr){
        sum=sum+x;
        count++;
    }
    let mean=sum/count;
    return mean;
}

//creating an array of numbers
const prompt=require("prompt-sync")();
let numCount=prompt("-> How many numbers do you want to enter : ");

let num;
let arr=[];

for (let i=1; i<=numCount; i++){
    num=prompt("Enter a number : ");
    arr.push(parseInt(num));
}

let result=calcMean(arr);
console.log("-- The mean of above numbers is ", result);