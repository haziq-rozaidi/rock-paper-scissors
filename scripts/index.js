function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    const winningMessage = "You win!";
    const losingMessage = "You lose!";
    const tieMessage = "It's a tie!";
    const rules = ["rock breaks scissors", "paper covers rock", "scissors cuts paper"];
    let result = "";

    if (playerSelection === "rock" && computerSelection === "paper") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[1]);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[0]);
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[1]);
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[2]);
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[0]);
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[2]);
    }
    else {
        result = tieMessage;
    }

    return result;
}

function getGameResult(playerScore, computerScore) {
    return playerScore > computerScore ? "Player is the winner" : "Computer is the winner";
}

function getChoiceEmoji(choice) {
    return choice === "rock" ? "✊"
        : choice === "paper" ? "✋"
        : "✌️";
}

const roundNumberHeading = document.querySelector(".heading_level_2");
const roundResultHeading = document.querySelector(".heading_level_3");
const buttons = document.querySelector(".buttons");
const playerChoiceContainer = document.querySelector(".scores__player:nth-child(1) .scores__choice");
const computerChoiceContainer = document.querySelector(".scores__player:nth-child(2) .scores__choice");
const playerScoreContainer = document.querySelector(".scores__player:nth-child(1) .scores__score > span");
const computerScoreContainer = document.querySelector(".scores__player:nth-child(2) .scores__score > span");

let roundNumber = 0;

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    if (Number(playerScoreContainer.textContent) === 5 || Number(computerScoreContainer.textContent) === 5) {
        return;
    }

    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    roundNumber += 1;

    roundNumberHeading.textContent = "Round " + roundNumber;
    playerChoiceContainer.textContent = getChoiceEmoji(playerSelection);
    computerChoiceContainer.textContent = getChoiceEmoji(computerSelection);
    roundResultHeading.textContent = roundResult;

    if (roundResult.includes("win")) {
        playerScoreContainer.textContent = Number(playerScoreContainer.textContent) + 1;
    }
    else if (roundResult.includes("lose")) {
        computerScoreContainer.textContent = Number(computerScoreContainer.textContent) + 1;
    }
});
