var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

started=false;
var level = 0;


$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});
  


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length+1);
        
});

function checkAnswer(currentLevel) {
    // console.log(userClickedPattern.length);
    // console.log(gamePattern.length);
    // console.log(currentLevel);
    // console.log(userClickedPattern[currentLevel]);
    // console.log(gamePattern[currentLevel]);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // console.log("success");
     
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 2000);

      }

    } else {

      // console.log("wrong");
      playSound("wrong");
    
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

      startOver();
    }
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // alert(gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadzeIn(100);
    playSound(randomChosenColour);
  }


function animatePress(currentColor) {
      $("#" + currentColor).addClass("pressed");
  
      setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    }


function playSound(name) {

    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

  
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }
  

