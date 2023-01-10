//PRACTICE SET 1:: CHAPTER 1

/*
QUES 1 - Create a variable of type string and try to add a number to it
QUES 2 - Use typeof operator to find the datatype of the string in last question
QUES 3 - Create a const objet in javascript. can you chagne it to hold a number later?
QUES 4 - Try to add a new key to the const object in Problem 3. Were you able to do it?
Ques 5 - Write a Javascript program to create a word meaning dictionary of 5 words

*/

//QUES 1
let str="Hi there. this is string";
console.log("String = ", str);
strnew=23.4;
console.log("String after addition = ", str+strnew);
str=strnew;
console.log("String after alteration = ", str);
console.log("-> String type can be altered to numeric one");

//QUES 2 
console.log("\nData type of string = ",typeof(str));

//QUES 3 Object = dictionary
const obj={
    name : "Ken",
    standard : 10 ,
    studentID : "AB001",
    isPrincipal : false
};
console.log("Constant object = ", obj);
//obj=23;
console.log("Constant object after assigning number = ", obj); 
//error occurs here

//QUES 4 
obj['name']="Zayn";
console.log("Object after changing name = ", obj);
obj['friend']="Nisa";
console.log("Object after adding 'friend' key = ", obj);

obj={};
console.log("Constant object after alteration as a whole= ", obj);
//Hence,  the values in keys of a const object can be changed and new keys can be added
//but changing the whole const object is not possible

//QUES 5 : word meaning dictionary or object
const dict={
    sanguine : "positive",
    meek : "Feeble",
    yakka : "hardwork",
    demeanour : "appearance and behaviour",
    reverence :"respect"
}

console.log("Dictionary of word meanings : ", dict);

