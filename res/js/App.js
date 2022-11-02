const userInput1 = document.getElementById("userInput1");
const userInput2 = document.getElementById("userInput2");
const userInput3 = document.getElementById("userInput3");
const userInput4 = document.getElementById("userInput4");
const send = document.getElementById("send");
const changeColorButton = document.getElementById("changeColorButton")
const content = document.getElementById("content");

const changeColor = () => {
    const color = userInput3.value;
    content.style.backgroundColor = color;
}

send.onclick = () => {
    const x = userInput1.value;
    const y = userInput2.value;
    const radius = userInput4.value;
    content.style.left = x + "px";
    content.style.top = y + "px";
    content.style.borderRadius = radius + "px";
    
}
changeColorButton.onclick = () => {
    changeColor();
}
content.onmousedown = () => {
    changeColor();
}
window.onload = () => {
    changeColor();
}