/*  LOOPS IN JAVASCRIPT
 *  -> for LOOP : for (let i ; i< ; i++) {}
    -> for in LOOP : for (let x in list){ } (for objects)
    -> for of LOOP : for (let x of list ) { } (for arrays)
 */

console.log("-> PRINTING FIRST 10 NUMBERS USING FOR LOOP : ")
for (let i=1; i<11; i++){
    console.log(i);
}
  

console.log("\n-> PRINTING AN OBJECT USING FOR IN LOOP : ")
let obj={
    "Name" : "Akash",
    "Department" : "CS",
    "Year" : "2nd",
    "Skills" : "Web development",
    "CGPA" : 8.5
}
for (let x in obj){
    console.log(x, " -> ", obj[x]);
}

let arr=['apple', 'mango', 'banana', 'litchi', 'papaya', 'orange', 'guava'];

console.log("\n-> PRINTING AN STRING USING FOR of LOOP : ")
for (let x of "VARIABLE"){
    console.log(x);
}
for (let x of arr){
    console.log(x);
}

//forEach() loop is used to iterate over the array 
console.log("\n -> FOREACH() LOOP USING ARRAY ")
arr.forEach(x => console.log("->", x));

