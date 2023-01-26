let firstCard, secondCard;
let total=0;

let status=document.getElementById("status");
let cards=document.getElementById("cards");
let sum=document.getElementById("sum");


//condition for cards to lie btw 1 and 13
function generateCards(){
    firstCard=Math.floor(Math.random()*13);
    secondCard=Math.floor(Math.random()*13);
    
    //sum of two cards
    total+=firstCard+secondCard;
}

function checkstatus(){
    if (total<21){
        document.getElementById("status").innerText="Do you want to draw a new card? ";
    }else if (total==21){
        document.getElementById("status").innerText="Wohooo! You got a BlackJack";
    }else if (total>21){
        document.getElementById("status").innerText="You're out of game!";
        exit();
    }
}

function startgame(){
    generateCards();
    setTimeout(()=>{
        document.getElementById("cards").innerText="Cards : " + firstCard+" & "+secondCard;
        document.getElementById("sum").innerHTML="Sum : "+total;
    }, 1000)

    setTimeout(() => {
        checkstatus();
}, 3000)
}

function newcard(){
    document.getElementById("status").innerText="Changing your cards!";
    setTimeout(()=>{
        generateCards();
        document.getElementById("cards").innerText+= " & " + firstCard+ " & "+secondCard;
        document.getElementById("sum").innerHTML="Sum : "+total;

        checkstatus();
    }, 4000)
}