const options = ['It is certain', "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely",
    "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now",
    "Concentate and ask again", "Don't count on it", "My reply is no", "Outlook not so good", "Very doubtful"
]

const magicBall = document.getElementById("mb-container");
const response = document.getElementById("response");

magicBall.addEventListener("click", myFunction());

function myFunction() {
    response.textContent = "8";
    response.style.fontSize = '7.5rem';

    magicBall.classList.add('animateNow');

    const index = Math.floor(Math.random() * 20);
    const message = options[index];

    setTimeout(() => {
        response.textContent = message;
        response.style.fontSize = '1rem';
        magicBall.className = 'magicball_outer';
        document.getElementById("clear").value = "";
    }, 3000)

    setTimeout(() => {

        response.textContent = "8";
        response.style.fontSize = '7.5rem';

    }, 7000)
}