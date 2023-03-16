const kissMyBtn = document.querySelector("#buttON");

kissMyBtn.addEventListener("click", function() {
  const kwestShun = document.getElementById("typedText").value;
  document.getElementById("chat_container").innerHTML = kwestShun;
});