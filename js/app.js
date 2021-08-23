/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*    1. Select elements                      
*        1. dice
*            1. player
*            2. player
*        2. winner
*        3. score 
*
*    2. Game Logic 
*        1. first dice if clickable it score = 0; 
*       2. second dice if clickable it score = 0; 
*
*       3. if first dice`s score hight it won, else loose.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Players */
const diceRoller1 = document.querySelector(".left-player");
const diceRoller2 = document.querySelector(".right-player");

/* Score */
const scoreLeft = document.querySelector(".score-left");
const scoreRight = document.querySelector(".score-right");

/* Winner */
let winner = document.querySelector(".winner-bar");

/* Dice Image */
let dice1 = document.querySelector(".dice-player-1");
let dice2 = document.querySelector(".dice-player-2");

dice1.src = `./images/dice-faces-1.svg`;
console.log(dice1.src);

/* Random value */
let generated = 0;

let generateRandom = () => {
    if (Number(scoreLeft.innerHTML) === 0) {
        generated = Math.round(Math.random() * 6);
        scoreLeft.innerHTML = generated;
    } else if (Number(scoreRight.innerHTML) === 0) {
        generated = Math.round(Math.random() * 6);
        scoreRight.innerHTML = generated;
    }

    /* Players Value */
    let leftPlayer = Number(scoreLeft.innerHTML);
    let rightPlayer = Number(scoreRight.innerHTML);

    if (leftPlayer > rightPlayer) {
        winner.innerHTML = `Player 1 Win`;
    } else if (leftPlayer == rightPlayer) {
        winner.innerHTML = "Equal";
    } else {
        winner.innerHTML = `Player 2 Win`;
    }

    switch (leftPlayer) {
        case 6:
            // dice1.src = `./images/dice-faces-1.svg`;
            dice1.src = `./images/dice-faces-6.svg`;
            break;
        case 2:
            dice1.src = `./images/dice-faces-2.svg`;
            break;
        case 3:
            dice1.src = `./images/dice-faces-3.svg`;
            break;
        case 4:
            dice1.src = `./images/dice-faces-4.svg`;
            break;
        case 5:
            dice1.src = `./images/dice-faces-5.svg`;
            break;

        default:
            dice1.src = `./images/dice-faces-1.svg`;
            break;
    }

    switch (rightPlayer) {
        case 6:
            // dice1.src = `./images/dice-faces-1.svg`;
            dice2.src = `./images/dice-faces-6.svg`;
            break;
        case 2:
            dice2.src = `./images/dice-faces-2.svg`;
            break;
        case 3:
            dice2.src = `./images/dice-faces-3.svg`;
            break;
        case 4:
            dice2.src = `./images/dice-faces-4.svg`;
            break;
        case 5:
            dice2.src = `./images/dice-faces-5.svg`;
            break;

        default:
            dice2.src = `./images/dice-faces-1.svg`;
            break;
    }
};

diceRoller1.addEventListener("click", generateRandom);
diceRoller2.addEventListener("click", generateRandom);
