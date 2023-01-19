/**     STRING METHODS :: Operations performed on strings using in-build functions
 * 
 * string.length    - string property ; returns the length of the string in numbers (the escape sequence characters are printed as one, i.e, \ is not counted as character)
 * 
 * string.toUpperCase() - retruns the string in upper case 
 * string.toLowerCase() - returns the string to lower case
 * 
 * string.slice(start_index, end_index) - prints the characters between the starting and end range. end_index is not included in output
 * string.slice(start_index) - prints the characters from start_index till the end of the string
 * 
 * string.replace("str1", "str2") - str1 is replaced by str2 in the string if str1 is present in the string
 * 
 * string.trim() - removes the whitespaces from the starting and ending of the string 
 * 
 * string.contcat(str2) - the output is shown with concatenation of the string with str2 in its end. the original string value is not affected
 * 
 * string.includes(substr) - returns true is substr is present in string, otherwise false
 * string.startsWith(substr), string.endsWith(substr)
 */

//string is a immutable type in data which cannot be changed. the above functions return the value and the new value can be stored in a new string
let name="Kenny";
let friend="Jotaro";
console.log(name.concat(" is a friend of ", friend));
console.log("string name = ", name);


//refer Google for more String methods in Javascript
//LINK : https://www.w3schools.com/js/js_string_methods.asp