let newGame = document.querySelector(".new-game");
let rollDice = document.querySelector(".roll-dice");
let hold = document.querySelector(".hold");
let image = document.querySelector(".image");
let miniTotel = 0;
let miniScore1 = document.querySelector(".mini-score1");
let miniScore2 = document.querySelector(".mini-score2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let total1 = document.querySelector(".total1");
let total2 = document.querySelector(".total2");
let miniScore = [miniScore1, miniScore2];
let total = [total1, total2];
let player = [player1, player2];
let i = 0;
const dice = [
    `images/01.PNG`,
    `images/02.PNG`,
    `images/03.PNG`,
    `images/04.PNG`,
    `images/05.PNG`,
    `images/06.PNG`,
];

const rendomNum = function() {
    const num = Math.floor(Math.random() * 6 + 1);
    return num;
};

rollDice.addEventListener("click", function() {
    const num = rendomNum();
    image.src = `${dice[num - 1]}`;
    if (num === 1) {
        change();
    } else {
        miniTotel += num;
        miniScore[i].textContent = miniTotel;
    }
});

const change = function() {
    miniTotel = 0;
    miniScore[i].textContent = miniTotel;
    if (i === 0) {
        i++;
        player1.style.backgroundColor = "rgba(83, 0, 35, 0.2)";
        player2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    } else {
        i--;
        player1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        player2.style.backgroundColor = "rgba(83, 0, 35, 0.2)";
    }
};
let count = [0, 0];
let winner = document.querySelector(".winner");
let pEl = document.querySelector(".p-el");
hold.addEventListener("click", function() {
    count[i] += miniTotel;
    if (count[i] >= 100) {
        winner.style.display = "block";
        pEl.textContent = `Player${i + 1} is the winner`;
    }
    total[i].textContent = count[i];
    change();
});
let filt = document.querySelector(".filt");
filt.addEventListener("click", function() {
    winner.style.display = "none";
    newF();
});

newGame.addEventListener("click", function() {
    newF();
});

const newF = function() {
    count[0] = 0;
    count[1] = 0;
    console.log(count[0]);
    total[0].textContent = count[0];
    total[1].textContent = count[1];
    miniScore[0].textContent = 0;
    miniScore[1].textContent = 0;
};