//Creating three different functions that return a value to the user 
/** SYNTAX OF A FUNCTION : 
 *  function <function name> (<parameter list>){
 * function body
 * return <type>
 * }
 */
function showFactorial(num){
    let fact=1;
    for (let i=1; i<=num;i++){
        fact=fact*i;
    }
    return fact;
}

function showFactors(num){
    let arr=[];
    for (let i=1; i<=num ; i++){
        if (num%i==0){
            arr.push(i);
        }
    }
    return arr;
}
function showMultiples(num){
    let arr=[];
    let ans;
    for (let i=1; i<=num ; i++){
        ans=num*i;
        arr.push(ans);    
    }
    return arr;
}
const prompt=require("prompt-sync")();
//let num2=prompt("-> Enter number 2 : ");
//let num3=prompt("-> Enter number 3 : ");
function menu(){
    console.log("=================");
    console.log("1. Calculate Factorial ");
    console.log("2. Calculate 10 Multiples ");
    console.log("3. Calculate factors ");
    console.log("=================");
}

let ch="yes";
let num, result;
while (ch=="yes" || ch=='y'){
    menu();
    let choice=prompt("-> Enter your choice : ");
    switch(choice){
        case "1" : 
        console.log("\t __ CALCULATING FACTORIAL ___");
        num=prompt("-> Enter a number : ");
        result=showFactorial(num);
        console.log("The factorial of ${num} is ", result, "\n");
        break;

        case "2" : console.log("\t __ CALCULATING MULTIPLES OF NUMBER ");
        num=prompt("-> Enter a number : ");
        result=showMultiples(num);
        console.log("The multiples of ", num, ' are : ');
        for (let x of result){
            console.log(x);
        }
        break;

        case "3" : console.log("\t __ CALCULATING FACTORS OF NUMBER ");
        num=prompt("-> Enter a number : ");
        result=showFactors(num);
        console.log("The factors of ", num, ' are : ');
        for (let x of result){
            console.log(x);
        }
        break;

        default: console.log("Invalid Operation!!!");
    }
    ch=prompt("\nDo you want to continue (y/n) : ");
}