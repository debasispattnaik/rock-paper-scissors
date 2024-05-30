let userScore = 0;
let computerScore = 0;
const winningScore = 10;

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    updateResult(userChoice, computerChoice, winner);
    updateScoreboard();

    if (userScore === winningScore || computerScore === winningScore) {
        displayFinalResult();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateResult(userChoice, computerChoice, winner) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>You chose: ${userChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>${winner === 'tie' ? "It's a tie!" : winner === 'user' ? "You win this round!" : "Computer wins this round!"}</p>
    `;
}

function updateScoreboard() {
    document.getElementById('userScore').innerText = `User Score: ${userScore}`;
    document.getElementById('computerScore').innerText = `Computer Score: ${computerScore}`;
}

function displayFinalResult() {
    const resultDiv = document.getElementById('result');
    if (userScore === winningScore) {
        resultDiv.innerHTML += '<p>Congratulations! You win the game!</p>';
    } else {
        resultDiv.innerHTML += '<p>Computer wins the game! Better luck next time.</p>';
    }

    // Disable buttons
    document.querySelectorAll('.choices button').forEach(button => {
        button.disabled = true;
    });
}
