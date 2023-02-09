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

const roundNumberHeading = document.querySelector("main .heading_level_2");
const roundResultHeading = document.querySelector("main .heading_level_3");
const buttons = document.querySelector(".buttons");
const playButton = document.querySelector(".button_play");
const playerChoiceContainer = document.querySelector(".scores__player:nth-child(1) .scores__choice");
const computerChoiceContainer = document.querySelector(".scores__player:nth-child(2) .scores__choice");
const playerScoreContainer = document.querySelector(".scores__player:nth-child(1) .scores__score > span");
const computerScoreContainer = document.querySelector(".scores__player:nth-child(2) .scores__score > span");
const modal = document.querySelector(".modal");
const modalHeading = document.querySelector(".modal__content > .heading_level_2");

let roundNumber = 0;

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    let playerScore = Number(playerScoreContainer.textContent);
    let computerScore = Number(computerScoreContainer.textContent);

    if (playerScore === 5 || computerScore === 5) {
        modal.classList.add("modal_active");
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
        playerScore += 1;
        playerScoreContainer.textContent = playerScore;
        if (playerScore === 5) {
            modalHeading.textContent = "You won!";
            modal.classList.add("modal_active");
        }
    }
    else if (roundResult.includes("lose")) {
        computerScore += 1;
        computerScoreContainer.textContent = computerScore;
        if (computerScore === 5) {
            modalHeading.textContent = "You lost!";
            modal.classList.add("modal_active");
        }
    }
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("modal_active");
});

playButton.addEventListener("click", (e) => {
    roundNumber = 0;
    roundNumberHeading.textContent = "Make a choice";
    roundResultHeading.textContent = "First to reach 5 points wins the game";
    playerChoiceContainer.textContent = "❔";
    computerChoiceContainer.textContent = "❔";
    playerScoreContainer.textContent = "0";
    computerScoreContainer.textContent = "0";
    modal.classList.remove("modal_active");
});
