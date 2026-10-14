function getComputerChoice() {
    const computerImage = document.querySelector(".computer-choice img");
    const randomValue = Math.random();

    if (randomValue < 1 / 3) {
        computerImage.src = "assets/rock_icon.svg";
        return "rock";
    }

    if (randomValue < 2 / 3) {
        computerImage.src = "assets/paper_icon.svg";
        return "paper";
    }

    computerImage.src = "assets/scissors_icon.svg";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }

    return "loss";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";

    const choices = [
        document.querySelector(".rock"),
        document.querySelector(".paper"),
        document.querySelector(".scissors")
    ];
    const moveButton = document.querySelector(".move");
    const humanScoreDom = document.querySelector(".player-score p");
    const computerScoreDom = document.querySelector(".computer-score p");
    const computerChoiceDom = document.querySelector(".result");
    const computerImage = document.querySelector(".computer-choice img");
    const gameOver = document.querySelector(".game-over");
    const gameOverMessage = document.querySelector(".game-over-message");
    const restartButton = document.querySelector(".restart");

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            choices.forEach((selectedChoice) => {
                selectedChoice.classList.remove("selected");
            });

            choice.classList.add("selected");
            humanChoice = choice.classList[1];
        });
    });

    moveButton.addEventListener("click", () => {
        if (humanChoice === "" || humanScore === 5 || computerScore === 5) {
            return;
        }

        const computerChoice = getComputerChoice();
        const outcome = playRound(humanChoice, computerChoice);
        computerChoiceDom.textContent = computerChoice;

        if (outcome === "win") {
            humanScore++;
            humanScoreDom.textContent = humanScore;
        } else if (outcome === "loss") {
            computerScore++;
            computerScoreDom.textContent = computerScore;
        }

        if (humanScore === 5 || computerScore === 5) {
            moveButton.disabled = true;
            gameOverMessage.textContent = humanScore === 5
                ? `You won! Score: ${humanScore} - ${computerScore}`
                : `Computer wins! Score: ${humanScore} - ${computerScore}`;
            gameOver.hidden = false;
        }
    });

    restartButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        humanChoice = "";
        humanScoreDom.textContent = humanScore;
        computerScoreDom.textContent = computerScore;
        computerChoiceDom.textContent = "Choose your move";
        computerImage.src = "assets/unknown_choice_icon.svg";
        moveButton.disabled = false;
        gameOver.hidden = true;

        choices.forEach((choice) => {
            choice.classList.remove("selected");
        });
    });
}

playGame();
