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

function playerMove() {
    let player_move = prompt("Choose rock paper or scissors").toLowerCase().trim();

    while (!((player_move === "rock") || (player_move === "paper") || (player_move === "scissors"))) {
        console.log(player_move)
        player_move = prompt("Invalid choice. Please choose rock paper or scissors before continuing!").toLowerCase().trim();
    }

    return player_move;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase()
    let player_loss = "Player lost",
    player_won = "Player won";
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("It's a draw! Rocks don't beat each other. Rocks are friends🙂.")
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.")
                    return player_loss;
                case "scissors":
                    console.log("You win! Rock beats scissors.")
                    return player_won;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You win! Paper beats rock.")
                    return player_won;
                case "paper":
                    console.log("It's a draw! Papers don't beat each other. Papers are friends🙂.")
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.")
                    return player_loss;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats scissors.")
                    return player_loss;
                case "paper":
                    console.log("You win! Scissors beats paper.")
                    return player_won;
                case "scissors":
                    console.log("It's a draw! Scissors don't beat each other. Scissors are friends🙂.")
                    break;
            }
            break;
    }
}

function game() {
    let restart = undefined;
    do {
        let player_score = 0,
            computer_score = 0;

        for (let i = 0; i < 5; i++) {
            let round = playRound(playerMove(), computerPlay());
            switch (round) {
                case "Player won":
                    player_score++;
                    break;
                case "Player lost":
                    computer_score++;
                    break;
            }
            console.log(`Player ${player_score} - Computer ${computer_score}`)
        }

        if (player_score > computer_score) {
            console.log("🎉Congratulations! You win!🎉")
        } else if (player_score == computer_score) {
            console.log("It's a draw!")
        } else {
            console.log("😢You lose! Better luck next time😢")
        }

        restart = prompt("Do you want to play again? Yes or No").toLowerCase().trim();
    } while (restart === "yes");

}

game();