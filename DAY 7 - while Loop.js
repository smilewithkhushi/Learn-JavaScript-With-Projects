/**
 *      WHILE LOOP
 *  while -> while (<condition>) {..... <incre/decre>}
 * do...while -> do {<statements>......<incre/decre>} while (<condition>)
 */

console.log("\n \t-> Printing numbers using while loop : ")
let i=0;
while (i<10){
    console.log(i);
    i++;
}

console.log("\n \t-> Printing even numbers using do.. while loop : ")
i=0;
do{
    console.log(i+=2);
}while (i<20);