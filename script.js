let instruction = document.querySelector(".instruction");
let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let button4 = document.querySelector(".button-4");
let body = document.querySelector("body");
let activePlayer = document.querySelector(".active-player");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");
button4.addEventListener("click", function () {
    instruction.classList.add("hidden");
})
button4.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && instruction.classList.contains("hidden"))
        instruction.classList.remove("hidden");
})

button2.addEventListener("click", function () {
    player1.classList.add("active-player");
    let random = Math.round(Math.random() * 6);
})