const msgParagraph=document.getElementsByClassName("message");

function purchase(){
    document.getElementsByName("message").innerText="Hi there";
    msgParagraph.textContent="Your item has been added to cart!";
}