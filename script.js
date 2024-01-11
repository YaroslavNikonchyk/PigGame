let instruction = document.querySelector(".instruction");
let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let button4 = document.querySelector(".button-4");
let body = document.querySelector("body");
let activePlayer = document.querySelector(".active-player");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");
let firstPlayerScore = document.querySelector(".first-player-score");
let secondPlayerScore = document.querySelector(".second-player-score");
let dice1 = document.querySelector(".dice-1")
let dice2 = document.querySelector(".dice-2")
let dice3 = document.querySelector(".dice-3")
let dice4 = document.querySelector(".dice-4")
let dice5 = document.querySelector(".dice-5")
let dice6 = document.querySelector(".dice-6")
let diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
button4.addEventListener("click", function () {
    instruction.classList.add("hidden");
})
button4.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && instruction.classList.contains("hidden"))
        instruction.classList.remove("hidden");
})
let score = 0;
player1.classList.add("active-player");
button2.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 6) + 1;
    score += random;
    diceArray.forEach(dice => dice.style.display = "none")
    if (player1.classList.contains("active-player")) {
        if (random !== 1) {
            firstPlayerScore.textContent = score;
            diceArray[random - 1].style.display = "block";
        } else {
            score = 0;
            firstPlayerScore.textContent = score;
            diceArray[0].style.display = "block";
            player1.classList.remove("active-player");
            player2.classList.add("active-player");
        }
    } else if (player2.classList.contains("active-player")) {
        if (random !== 1) {
            secondPlayerScore.textContent = score;
            diceArray[random - 1].style.display = "block";
        } else {
            score = 0;
            secondPlayerScore.textContent = score;
            diceArray[0].style.display = "block";
            player1.classList.add("active-player");
            player2.classList.remove("active-player");
        }
    }
})