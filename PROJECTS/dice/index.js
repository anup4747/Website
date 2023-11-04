// dice1

// selecting the dice number
var randomNumber1 = Math.floor(Math.random()*6)+1 //1-6 

// selcting dice name
var randomdiceImage= "dice" + randomNumber1 + ".png"; //dic1 - dice6

// dice location
var randomimagesource = "images/" + randomdiceImage;

// image location in website
var img1 = document.querySelectorAll("img")[0];

//<img class="img1" src="images/dice1.png"></img>
// chiossing src
//https://www.w3schools.com/jsref/met_element_setattribute.asp
img1.setAttribute("src" , randomimagesource)

// dice2

var randomNumber2 = Math.floor(Math.random()*6)+1 //1-6 

var randomdiceImag2= "dice" + randomNumber2 + ".png"; //dic1 - dice6

var randomimagesource2 = "images/" + randomdiceImag2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , randomimagesource2);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1").innerHTML("Player 1 Wins!");
}
else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1").innerHTML("Player 2 Wins!");
}
else{
    document.querySelectorAll("h1").innerHTML("It's Draw!!");
}