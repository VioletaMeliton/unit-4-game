// A game with four crystals 
//A random number generated (from 19-120) at the start of the game
//Every crystal needs to have a random number from 1 - 12
//When player click on a crystal it will add a specific amount of points to the player's total score
//A new random number should be generated every single time the user wins or losses
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
//The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//global variables;
var random_result = 0;
var lost = 0;
var win = 0;
var totalScore = 0;
var images = ['assets/images/image1.jpg','assets/images/image2.jpg','assets/images/image3.jpg','assets/images/image4.jpg'];


function newGame () {

    $(".crystals").empty();
    
    //random value to be guessed
    random_result = Math.floor(Math.random() * 101) + 19;
    $("#result").html("Random Number: " + random_result);

    //get the random values for the four crystals
    for (var i = 0; i < images.length; i++) {
        var randomNums = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomNums
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')", "background-size": 'cover'
        }
        )
        
        $(".crystals").append(crystal);

    }
    $("#totalScore").html("Total Score: " + totalScore);
}

//function called
newGame();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    totalScore = totalScore + num;

    //console.log(totalScore);
    $("#totalScore").html("Total Score: " + totalScore);
    if (totalScore > random_result) {
        loser();
    }
    else if (totalScore === random_result){
        winer();
    }
    function loser() {
        alert("Sorry you lost! Score: " + totalScore);
        lost++;
        // console.log("you lost!");
        $("#lost").html("losses: " + lost);
        totalScore = 0;
        newGame();
    }
    function winer() {
        alert("You win!! Score: " + totalScore);
        win++;
        //console.log("you win!!");
        $("#win").html("wins: " + win);
        totalScore = 0;
        newGame();
    }

});