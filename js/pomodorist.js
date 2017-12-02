var totalTime = 1500;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var x;


function count() {
    var mins = Math.floor(totalTime / 60);
    var secs = totalTime - mins * 60;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    totalTime--;
    // console.log(totalTime)
    // debugger;
    if (totalTime === 0) {
        var audio = document.getElementById("alert")
        audio.play();
        stop();
        message.innerHTML = "Your work time is over, take a break";
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