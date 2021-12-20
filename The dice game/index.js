var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);
var img1 =document.getElementsByClassName('img1')[0];
var img2 =document.getElementsByClassName('img2')[0];

img1.src='images/dice'+ randomNumber1 + '.png';
img2.src='images/dice'+ randomNumber2 + '.png';



if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 win';
} else if(randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 win';
} else {
    document.querySelector('h1').innerHTML = 'Draw';
}