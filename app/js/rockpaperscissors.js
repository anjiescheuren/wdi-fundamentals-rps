////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    if (move = true) {
        return (move);
    } else if (move == null) {
        return getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    var move;
    if (move = true) {
        return (move);
    } else if (move == null) {
        return randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var playerMove;
    var computerMove;
    var playerWins = 'Player Wins!';
    var computerWins = 'Computer Wins!'
    var tie = 'Players tie!';
    if (playerMove == 'rock' && computerMove == 'scissors'){
        return (playerWins);
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        return (playerWins);
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        return (playerWins);
    }
    else if (computerMove == 'rock' && playerMove == 'scissors') {
        return (computerWins);
        }
    else if (computerMove == 'paper' && playerMove == 'rock') {
        return (computerWins);
        }
    else if (computerMove == 'scissors' && playerMove == 'paper') {
        return (computerWins);
    }    
    else if (computerMove == playerMove); {
        return (tie);
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
+        var playerMove = getPlayerMove();
+        var computerMove = getComputerMove();
+        var winner = getWinner(playerMove, computerMove);
+        if (winner == "player") {
+            playerWins += 1;
+            console.log(playerMove + computerMove + winner);
+        }
+        else if (winner == "computer") {
+            computerWins += 1;
+        }
+        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
+        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
+    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

