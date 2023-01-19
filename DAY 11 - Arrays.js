/**     ARRAYS
 * A data type that holds more than one value, enclosed under [] brackets
 * 
 * ARRAY METHODS/FUNCTIONS : 
 * 
 *  array.toString()    - converts the array values to string
 *  array.join(<seperator>)    - the array elements are joined with a seperator 
 *  array.push(value)   - adds a new value to the end of the array
 *  array.pop() - removes the last element from the existing array
 *  array.shift() - removes the first element from the existing array
 *  array.unshift(<value>)  - adds a new element to the beginning of the array
 * 
 *  delete statement is used to delete the value but it does not affect the length of the array. Only the value is changed to null
 *  array.concat(<array new>)   - merges array 2 with array 1 without modifing the existing arrays
 *  array.concat(<arr2>, <arr3>)        - concatenates multiple arrays
 *  array.reverse()     - reverses the array
 * 
 *  array.splice(<starting index>, <values to be omitted in arr> , <new values>)      -  the starting index mentioned in the array and the number of values after it are removed and in place of it, the new values are added
 * 
 *  array.slice( <start>, <end>) or (<start>) - prints the selected values from the starting index till the end index 
 * 
 *  array.sort()       - sorts the array, modifies the original array but sorts alphabetically
 *  array.sort(compare) - sorts either in ascending order or descending order
 * 
 * let compare= (a,b) => {
 *      return a-b / b-a
 * }
 */

const prompt=require("prompt-sync")();

let list1=[null, 23, 56.98, "hello world", 'A'];
console.log("\nList of varied data types : ", list1);

let marks=[67,89,78,90, 88];
console.log("Array of numbers : ", marks);

//SLICE FUNCTION
let slicedValue=marks.slice(2,6);
console.log("\nSliced values (idx 2-6) : ", slicedValue);

//SPLICE FUNCITON
let deletedValues=marks.splice(2,2, 44,55,66,77,88);
console.log("\nMarks array after splice funciton : ", marks);
//2 values from 2nd index are removed and the other values are added from index 2
console.log("Deleted values : ", deletedValues);

//REVERSE FUNCTION
console.log("\nArray after reversing : ", marks.reverse());

//DELETE METHODS
delete marks[0];
console.log("\nArray after deletion : ", marks);
console.log("Length of array after deletion : ", marks.length);

//CONCAT FUNCTION
let arrConcat=marks.concat(list1);
console.log("\nnew array after concatenation : ", arrConcat);

let newArray=marks.concat(list1, marks);
console.log("Concatenating multiple arays : ", newArray);


//SORTING USING COMPARE FUNCTION
let compare=(a,b)=>{
    return b-a;
} //sorts in descending order

marks.sort(compare);
console.log("Marks array after sorting using compare function in descending order: ", marks);

compare=(a,b)=>{
    return a-b;
} //sorts in ascending order

marks.sort(compare);
console.log("Marks array after sorting using compare function in ascending order : ", marks);


//SORT FUNCTION
marks.sort();
console.log("Marks array after sorting : ", marks);


//TOSTRING FUNCTION
console.log("\nArray of numbers in string : ", marks.toString());


//JOIN FUNCITON
console.log("Joining the string with seperator : ", marks.join(" * "));


//SHIFT FUNCTION()
console.log("\nUse of shift function : ", marks.shift(), "\nArray after shift function : ", marks);


//UNSHIFT FUNCTION ()
console.log("\nUse of unshift function : ", marks.unshift(5), "\nArray after unshift function : ", marks);


//INDEXES OF ARRAY
console.log("\nAccessing 0 index of list of marks : ", marks[0])

console.log("Length of the list : ", marks.length);


//ADDING NEW ELEMENT USING INDEXES
let val;
val=prompt("\nEnter a new value in list : ");
marks[marks.length]=val;
console.log("Array after Adding new element using indexing = ", marks);


//POP FUNCTION
console.log("value popped from list : ", marks.pop());
console.log("List after popping a value : ", marks);


// PUSH FUNCTION
val=prompt("Enter a new value in list : ");
marks.push(parseInt(val))
console.log("Marks = ", marks);
