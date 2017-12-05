var totalTime = 1500;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var x;
var message = "";
var n;

function count() {
    // debugger;
    var mins = Math.floor(totalTime / 60);
    var secs = Math.floor(totalTime % 60);
    minutes.innerHTML = (Math.floor(totalTime / 60) < 10 ? "0" : "") + mins;
    seconds.innerHTML = (Math.floor(totalTime % 60) < 10 ? "0" : "") + secs;
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