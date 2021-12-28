var gamePattern =[];
var userClickedPattern =[];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).on('keypress',function(e) {
    if(level == 0) {
        level++;
        nextSequence();
        $("h1").text("Level " + level);
    }
});

$(".btn").click(function(){
   var userChosenColour = this.id;
   userClickedPattern.push(userChosenColour);
   pressed(userChosenColour);
   game();
});

function nextSequence() {
    userClickedPattern=[];
    var randomNumber=  Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    pressed (randomChosenColour);
    gamePattern.push(randomChosenColour);
}

function game() {
    var gamePatternLength = gamePattern.length;
    var userClickedPatternLength = userClickedPattern.length;

    if(gamePatternLength < userClickedPatternLength) {
        gameOver();
    }
    if(gamePattern[userClickedPatternLength-1] !== userClickedPattern[userClickedPatternLength-1]) {
        gameOver();
        
    }
    if(gamePatternLength == userClickedPatternLength) {
        level++;
        $("h1").text("Level " + level);
        setTimeout(
            function() 
            {
                nextSequence();
            },500);
    }

}

function gameOver () {
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    userClickedPattern = [];
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    level=0;
    setTimeout(
        function() 
        {
         $("body").removeClass("game-over");
        },200);
}

function pressed (buttonId) {
    $("#"+ buttonId).addClass("pressed");
    var audio = new Audio('sounds/'+buttonId+'.mp3');
    audio.play();
    setTimeout(
        function() 
        {
         $("#"+ buttonId).removeClass("pressed");
        },70);
}