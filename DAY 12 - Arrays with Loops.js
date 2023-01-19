/*      ARRAYS WITH LOOPS
* Array.from(<obj/data type>)   - used to create an array from any other data type , can be object or string
*/

//TRAVERSING ARRAY WITH LOOP
let num=[23,43,2,33,5,73,44,2];
let num2=[11,22,33,44];
for (let i=0; i<=num.length; i++){
    console.log(num[i]);
}

//FOR OF LOOP
console.log("\nFor Of loop demonstration : ")
for (let x of num2){
    console.log(x);
}

//FOR IN LOOP
console.log("\nFor In loop demonstration : ")
for (let x in num2){
    console.log(x, " ", num2[x]);
}

console.log("\n ** DEMONSTRATING ARRAY FROM FUNCTION ");
// let obj={"name": "kenny", "class": "11", "age": 17};
// console.log("Type of obj = ", typeof(obj));

let name="Kenny";
let arr=Array.from(name);
console.log(arr);
console.log("Type of arr = ", typeof(arr));


//access each element individually
num.forEach(element => {
    console.log(element*element);
});

