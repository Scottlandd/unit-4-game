// ****Set global variables.
// Generate random number for the user goal (between 19-120).
var goalNumber = Math.floor(Math.random() * 101+19);
// Display goal number on the webpage.
$('#goalNumber').text(goalNumber);
// Generate random number values for each crystal.
var a = Math.floor(Math.random()* 11+1);
var b = Math.floor(Math.random()* 11+1);
var c = Math.floor(Math.random()* 11+1);
var d = Math.floor(Math.random()* 11+1);
// Variables for sum of numbers guessed and score tallies.
var playerTotal = 0;
var wins = 0;
var losses = 0;
// Display wins and losses numbers on the webpage.
$('#playerWins').text(wins);
$('#playerLosses').text(losses);
// Display current user score.
$("#userTotal").text(playerTotal);
// Function to reset the game after a win/loss.
function newGame () {
    goalNumber=Math.floor(Math.random() * 101+19)
    $('#goalNumber').text(goalNumber);
    a = Math.floor(Math.random()* 11+1);
    console.log(a);
    b = Math.floor(Math.random()* 11+1);
    console.log(b);
    c = Math.floor(Math.random()* 11+1);
    console.log(c);
    d = Math.floor(Math.random()* 11+1);
    console.log(d);
    playerTotal = 0;
    // Resets the score display to zero.
    $("#userTotal").text(playerTotal);
}
// Create functions for when the user click on gemstones.
$("#amethyst").on("click", function() {
    playerTotal = playerTotal + a;
    console.log("Total Score: " + playerTotal);
    $('#userTotal').text(playerTotal);
    // Define a win or loss.
    if (playerTotal === goalNumber) {
        alert("You win!! Awesome!!");
        wins++;
        $('#playerWins').text(wins);
        newGame();
    }
    else if (playerTotal > goalNumber) {
        alert("You lose!! Bummer...")
        losses++;
        $('#playerLosses').text(losses);
        newGame();
    }
})
$("#celestine").on("click", function() {
    playerTotal = playerTotal + b;
    console.log("Total Score: " + playerTotal);
    $('#userTotal').text(playerTotal);
    if (playerTotal === goalNumber) {
        alert("You win!! Awesome!!");
        wins++;
        $('#playerWins').text(wins);
        newGame();
    }
    else if (playerTotal > goalNumber) {
        alert("You lose!! Bummer...")
        losses++;
        $('#playerLosses').text(losses);
        newGame();
    }
})
$("#garnet").on("click", function() {
    playerTotal = playerTotal + c;
    console.log("Total Score: " + playerTotal);
    $('#userTotal').text(playerTotal);
    if (playerTotal === goalNumber) {
        alert("You win!! Awesome!!");
        wins++;
        $('#playerWins').text(wins);
        newGame();
    }
    else if (playerTotal > goalNumber) {
        alert("You lose!! Bummer...")
        losses++;
        $('#playerLosses').text(losses);
        newGame();
    }
})
$("#jade").on("click", function() {
    playerTotal = playerTotal + d;
    console.log("Total Score: " + playerTotal);
    $('#userTotal').text(playerTotal);
    if (playerTotal === goalNumber) {
        alert("You win!! Awesome!!");
        wins++;
        $('#playerWins').text(wins);
        newGame();
    }
    else if (playerTotal > goalNumber) {
        alert("You lose!! Bummer...")
        losses++;
        $('#playerLosses').text(losses);
        newGame();
    }
})



 