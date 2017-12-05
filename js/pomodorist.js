var totalTime = 1500;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var x;
var message = "";

function count() {
    var mins = Math.floor(totalTime / 60);
    var secs = totalTime - mins * 60;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    if (mins < 10) {
        var message = "0": "mins";
    }
    if (secs < 10) {
        var message = "0": "secs";
    }
    totalTime--;
    // console.log(totalTime)
    // debugger;
    if (totalTime === 0) {
        var audio = document.getElementById("alert")
        audio.play();
        var animation = document.getElementById("clock");
        animation.play();
        stop();

    }
}

function start() {
    x = setInterval(count, 1000);
}

function stop() {
    clearInterval(x);
}

function reset() {
    location.reload();
}