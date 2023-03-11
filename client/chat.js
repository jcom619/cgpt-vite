const textgpt = this.document.querySelector("#getText");
const field = document.querySelector("#textHere");
const theBtn = document.getElementById("sendBtn");
let outerpoot = field.innerText = textgpt.value;

theBtn.addEventListener("click", sendingChat);

function sendingChat(outerpoot) {
    
    textgpt.value = '';
}