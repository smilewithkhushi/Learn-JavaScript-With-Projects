/**     STRINGS IN JAVASCRIPT
 * 
 */

let name="kenny"; //a simple string
console.log("Length of string = ", name.length);  
//prints the length of the string 

let friend='jotaro';
console.log("Length of string '' = ", friend, "; type = ", typeof(friend));
//string can be stored with single inverted comma also ' ' 

//printing the characters of string according to the index
//syntax : <string name> [ <index value>]
console.log("\n -> String indexes : ");
for (let i=0; i<name.length; i++){
    console.log(name[i]);
}

//Template literals - they use ``  backticks instead of single/double inverted comma
// the variable is referred as ${ <varname>} and used directly inside the backtick in template literal
let boy1="Alex";
let boy2="Louis";
let sentence=`${boy1} is a friend of ${boy2}`;
console.log(sentence);

/*  ESCAPE SEQUENCE :: Special Characters in a programming language
*   \\ : single back slash
*   \r : carriage return
*   \0 : single whitespace
*   \n : new line
*   \t : Tab space
*/