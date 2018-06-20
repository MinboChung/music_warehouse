var beautiful = new Audio('1-01 Beautiful.mp3');
var outside = new Audio('1-02 Outside (Feat. Beenzino).mp3');
var sometimes = new Audio('1-01 가끔.mp3');
var forget = new Audio('1-01 잊어버리지마 (Feat. 태연).mp3');


function play_audio(letter) {
    if (letter == 'Beautiful') {
        if (!beautiful.paused) {
            beautiful.pause();
        } else {
            beautiful.play();
        }
    } else if (letter == 'Outside') {
        if (!outside.paused) {
            outside.pause();
        } else {
            outside.play();
        }
    } else if (letter == 'Sometimes') {
        if (!sometimes.paused) {
            sometimes.pause();
        } else {
            sometimes.play();
        }
    } else if (letter == 'Forget') {
        if (!forget.paused) {
            forget.pause();
        } else {
            forget.play();
        }
    }  else {
        alert("No music can be found!");
    }

}

