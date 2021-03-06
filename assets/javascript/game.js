
var wins = 0;
var losses = 0;
var maxGuess = 9;
var guessLeft = maxGuess;
var selectedLetters = new Array();
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function updateDisplay() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses)
    $("#guess-left").text("Guesses Left: " + guessLeft);

    if (selectedLetters.length === 0) {
        $("#guess-letters").text("Nada...");
    }

    updateProgressBar();
}

function generateSecretLetter() {
    return Math.floor(Math.random() * 25) + 65;
}

function wonRound() {
    $("#main-img").attr("src", "assets/images/woohoo.png");
    $("#wins").addClass("bg-success");
    $("#losses").removeClass("bg-danger");
    audioElement.setAttribute("src", "assets/sounds/woohoo.wav");
    audioElement.play();
}

function lostRound() {
    $("#main-img").attr("src", "assets/images/doh.png");
    $("#losses").addClass("bg-danger");
    $("#wins").removeClass("bg-success");
    audioElement.setAttribute("src", "assets/sounds/doh.wav");
    audioElement.play();
}

function reset() {
    guessLeft = maxGuess;
    selectedLetters = [];
    clearGuesses();
    updateDisplay();
    secretLetter = generateSecretLetter();
}

function clearGuesses() {
    $("#guess-letters").empty();
}

function updateProgressBar() {
    var guessPercentLeft = ((guessLeft / maxGuess) * 100);

    if (guessLeft >= 7) {
        $("#guess-progress").addClass("bg-success");
        $("#guess-progress").attr("style", "width: " + guessPercentLeft + "%");
        $("#guess-progress").attr("aria-valuenow", guessLeft)
        $("#guess-progress").removeClass("bg-warning");
        $("#guess-progress").removeClass("bg-danger");
    } else if (guessLeft >= 4) {
        $("#guess-progress").removeClass("bg-success");
        $("#guess-progress").addClass("bg-warning");
        $("#guess-progress").attr("style", "width: " + guessPercentLeft + "%");
        $("#guess-progress").attr("aria-valuenow", guessLeft)
        $("#guess-progress").removeClass("bg-danger");
    } else {
        $("#guess-progress").removeClass("bg-success");
        $("#guess-progress").removeClass("bg-warning");
        $("#guess-progress").addClass("bg-danger");
        $("#guess-progress").attr("style", "width: " + guessPercentLeft + "%");
        $("#guess-progress").attr("aria-valuenow", guessLeft)
    }
}

updateDisplay();

var secretLetter = generateSecretLetter();
var audioElement = new Audio();

$(document).keyup(function (e) {
    var keyPressed = e.which;

    if (keyPressed >= 65 && keyPressed <= 90) {

        if (keyPressed === secretLetter) {
            wins++;

            wonRound();
            reset();

        } else {
            if ((selectedLetters.indexOf(letters[keyPressed - 65])) === -1) {
                guessLeft--;

                if (guessLeft === 0) {
                    losses++;

                    lostRound();
                    reset();
                } else {
                    clearGuesses();

                    selectedLetters.push(letters[keyPressed - 65]);
                    selectedLetters.sort();

                    for (var i = 0; i < selectedLetters.length; i++) {
                        $("#guess-letters").append(((i === 0) ? "" : ", ") + selectedLetters[i]);
                    }
                }

                updateDisplay();
            }
        }
    }

});
