let initialCount = 0

let saveEl=document.getElementById("status-output")

function increment() {
    initialCount += 1;
    document.getElementById("count-el").innerText = initialCount
}

function decrement() {
    if (initialCount > 0) {
        initialCount -= 1;
        document.getElementById("count-el").innerText = initialCount
    }
}

function save() {
    console.log(initialCount+" - ");
    let countStr=" "+ initialCount + " - ";
    document.getElementById("status-output").innerText += countStr;
    initialCount=0
    document.getElementById("count-el").innerText = initialCount
}   