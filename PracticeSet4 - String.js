/**     PRACTICE SET 4 :: REVISE STRING AND STRING METHODS
 * 
 */

//convert a string to lowercase and upper case
const prompt=require("prompt-sync")();

let userstring=prompt("-> Enter a string : ");
console.log("The string in lower case = ", userstring.toLowerCase());
console.log("The string in upper case = ", userstring.toUpperCase());