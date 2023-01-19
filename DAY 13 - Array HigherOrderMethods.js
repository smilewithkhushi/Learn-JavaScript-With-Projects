/**     HIGHER ORDER ARRAY METHODS
 *  MAP METHOD : creates new array by performing some operation on each array element. 
 * 
 *  Map method is similar as ForEach method but the array created by Map method can be stored as  a new array, whereas in forEach method, the new array is not created
 * 
 *  FILTER METHOD : used to create a new array out of the original array after filtering the elements with a condition
 * 
 *  REDUCE METHOD : 
 */

/**     syntax ::
 *  let newArr=array.map((value, index)=>{
 *  })
 *  let newArr=array.filter((a)=>{
 *  if (a<=value):
 * return a 
 * })
 * 
 */

let arr=[22,34,56,43];
console.log("Array =", arr);

let arrNew=arr.map((value)=>{
    console.log(value);
    return value+1;
})
console.log("updated array = ", arrNew);

arrNew=arr.map((value, index)=>{
    console.log(value, index);
    return value+1;
})
console.log("updated array = ", arrNew);
//Value and index are arguements present with map function itself

//FILTER METHOD FOR ARRAY
let arr2=[34,56,43,12,34,7,0];
let a2=arr2.filter((a)=>{
    return a<30;
})
console.log("Filter function demo :", a2);

//REDUCE METHOD FOR ARRAY
let arr3=[2,3,4,5,6,7,5,4,3,11];
arrNew=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log("Array : ", arr3)
console.log("Array after reduce function : ", arrNew);

//REDUCE FUNCTION IMPLEMENTED USING USER DEFINED FUNCTION 
let reduceFun=((h1,h2)=>{
    return h1,h2;
})
arrNew=arr3.reduce(reduceFun);
console.log("Array new : ", arrNew);
