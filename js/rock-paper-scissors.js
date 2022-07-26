const score_board = document.querySelector('#score-board'),
    round_result = document.querySelector('#round-result'),
    restart = document.querySelector('#restart'),
    choices = document.querySelectorAll('#input-choice');

let player_score = 0,
    computer_score = 0;

score_board.textContent = `Player ${player_score} - Computer ${computer_score}`;
round_result.textContent = "Let the games begin!";

// Computes the computer's move
function computerPlay() {
    let random_int = Math.floor(Math.random() * 3);
    let cpu_move = undefined;
    switch (random_int) {
        case 0:
            cpu_move = "Rock"
            break;
        case 1:
            cpu_move = "Paper"
            break;
        case 2:
            cpu_move = "Scissors"
            break;
        default:
            break;
    }
    return cpu_move
}

// Computes a round of play
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase()
    let player_loss = "Player lost",
        player_won = "Player won";
    switch (playerSelection) {
        // Comparisons with computer's move if player selection is rock
        case "rock":
            switch (computerSelection) {
                case "rock":
                    round_result.textContent = "It's a draw! Rocks don't beat each other. Rocks are friends🙂.";
                    break;
                case "paper":
                    round_result.textContent = "You lose! Paper beats rock.";
                    return player_loss;
                case "scissors":
                    round_result.textContent = "You win! Rock beats scissors.";
                    return player_won;
            }
            break;
        // Comparisons with computer's move if player selection is paper
        case "paper":
            switch (computerSelection) {
                case "rock":
                    round_result.textContent = "You win! Paper beats rock.";
                    return player_won;
                case "paper":
                    round_result.textContent = "It's a draw! Papers don't beat each other. Papers are friends🙂.";
                    break;
                case "scissors":
                    round_result.textContent = "You lose! Scissors beats paper.";
                    return player_loss;
            }
            break;
        // Comparisons with computer's move if player selection is scissors
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    round_result.textContent = "You lose! Rock beats scissors.";
                    return player_loss;
                case "paper":
                    round_result.textContent = "You win! Scissors beats paper.";
                    return player_won;
                case "scissors":
                    round_result.textContent = "It's a draw! Scissors don't beat each other. Scissors are friends🙂.";
                    break;
            }
            break;
    }
}

function game(player_choice) {
    let round = playRound(player_choice, computerPlay());
    switch (round) {
        case "Player won":
            player_score++;
            break;
        case "Player lost":
            computer_score++;
            break;
    }
    score_board.textContent = `Player ${player_score} - Computer ${computer_score}`;

    if (player_score === 5 || computer_score === 5) {
        if (player_score > computer_score) {
            round_result.textContent = "🎉Congratulations! You win!🎉";
        } else {
            round_result.textContent = "😢You lose! Better luck next time😢";
        }
        restart.removeAttribute('hidden');
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let player_move = choice.innerHTML;
        game(player_move.toLowerCase());
    })
})

restart.addEventListener('click', () => {
    player_score = 0;
    computer_score = 0;
    score_board.textContent = `Player ${player_score} - Computer ${computer_score}`;
    round_result.textContent = "A new game begins!";
    restart.setAttribute('hidden', true);
})