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
