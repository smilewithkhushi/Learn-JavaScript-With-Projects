/** CONDITIONAL STATEMENTS
 * switch ( <condition> ) {
 * case "1" : <statement>
 * case "2" : <statement>
 * 
 * default : this field returns the output if none of the cases match the condition given in switch()
 * } 
 * each case is accompanied by a break statement otherwise the conditional will test the condition for all the cases.
 * 
 * it is used to test for multiple cases 
 */

const prompt=require("prompt-sync")();
let sport = prompt("-> Enter a sport : ");
switch(sport){
    case "football" : console.log("Football is an outdoor game loved by many! Did you enjoy the recent Argentina VS France Tournament?? ");
    break;

    case "taekwondo" : console.log("A korean form of Martial arts for self defense and fighting. It is also an olympic sport");
    break;

    case "Chess" : console.log("An indoor game that requires lots of thinking and implementation. Play wise or you'll lose your queen");
    break;
    default : console.log("You have choosen ", sport, " as a sport. No data available currently");
}

console.log("\n ** PROGRAM ENDS HERE ** ");