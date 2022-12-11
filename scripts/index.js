function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(choices.length)];
}

function getPlayerChoice() {
    let message = "rock, paper or scissors?";
    let choice = prompt(message);

    if (choice === null) {
        return "";
    }
    else {
        choice = choice.trim().toLowerCase();

        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = prompt(message);

            if (choice === null) {
                return "";
            }
            else {
                choice = choice.trim().toLowerCase();
            }
        }
    }

    return choice;
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    const winningMessage = "You win!";
    const losingMessage = "You lose!";
    const tieMessage = "It's a tie!";
    const rules = ["rock breaks scissors", "paper covers rock", "scissors cuts paper"];
    let result;

    if (playerSelection === computerSelection) {
        result = tieMessage;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[1]) + ".";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[0]) + ".";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[1]) + ".";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[2]) + ".";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = losingMessage + " " + capitaliseFirstLetter(rules[0]) + ".";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = winningMessage + " " + capitaliseFirstLetter(rules[2]) + ".";
    }
    else {
        result = "";
    }

    return result;
}

function getGameResult(playerScore, computerScore) {
    let result;

    if (playerScore > computerScore) {
        result = "Player is the winner!";
    }
    else if (playerScore < computerScore) {
        result = "Computer is the winner!";
    }
    else {
        result = "It's a draw!"
    }

    return result;
}

function calcScore(results) {
    let playerScore = 0;
    let computerScore = 0;
    let scores;

    for (let i = 0; i < results.length; i++) {
        if (results[i].includes("win")) {
            playerScore += 1;
        }
        else if (results[i].includes("lose")) {
            computerScore += 1;
        }
        else {
            playerScore += 0;
            computerScore += 0;
        }
    }

    scores = [playerScore, computerScore];

    return scores;
}
