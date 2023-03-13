const textgpt = this.document.querySelector("#getText");
const field = document.querySelector("#textHere");


addEventListener("click", () => {
    let theWords = textgpt.value;
        field.innerHTML = theWords;
});