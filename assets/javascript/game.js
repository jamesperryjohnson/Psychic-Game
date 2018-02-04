
var wins = 0;
var losses = 0;
var guessLeft = 9;
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

function reset() {
    guessLeft = 9;
    selectedLetters = [];
    clearGuesses();
    updateDisplay();
    secretLetter = generateSecretLetter();
}

function clearGuesses() {
    $("#guess-letters").empty();
}

function updateProgressBar() {
    if (guessLeft >= 7) {
        $("#guess-progress").addClass("bg-success");
        $("#guess-progress").attr("style", "width: 100%");
        $("#guess-progress").attr("aria-valuenow", "9")
        $("#guess-progress").removeClass("bg-warning");
        $("#guess-progress").removeClass("bg-danger");
    } else if (guessLeft >= 4) {
        $("#guess-progress").removeClass("bg-success");
        $("#guess-progress").addClass("bg-warning");
        $("#guess-progress").attr("style", "width: 66%");
        $("#guess-progress").attr("aria-valuenow", "6")
        $("#guess-progress").removeClass("bg-danger");
    } else {
        $("#guess-progress").removeClass("bg-success");
        $("#guess-progress").removeClass("bg-warning");
        $("#guess-progress").addClass("bg-danger");
        $("#guess-progress").attr("style", "width: 33%");
        $("#guess-progress").attr("aria-valuenow", "3")
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

            $(function () {
                $("#main-img").attr("src", "assets/images/woohoo.png");
                $("#wins").addClass("bg-success");
                $("#losses").removeClass("bg-danger");
                audioElement.setAttribute("src", "assets/sounds/woohoo.wav");
                audioElement.play();
            })

            reset();
        } else {
            if ((selectedLetters.indexOf(letters[keyPressed - 65])) === -1) {
                guessLeft--;

                if (guessLeft === 0) {
                    losses++;

                    $(function () {
                        $("#main-img").attr("src", "assets/images/doh.png");
                        $("#losses").addClass("bg-danger");
                        $("#wins").removeClass("bg-success");
                        audioElement.setAttribute("src", "assets/sounds/doh.wav");
                        audioElement.play();
                    })

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
