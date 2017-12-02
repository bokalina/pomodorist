var totalTime = 1500;
var minutes = getElementById("minutes");
var seconds = getElementById("seconds");
var x = setInterval(count, 10);

function isNegative(num) {
    if (isNaN(num)) {
        return false;
    }
    return Math.min(num, 0) != 0;
}

function count() {
    var mins = Math.floor(totalTime / 60);
    var secs = totalTime - mins * 60;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    totalTime--;
    console.log(totalTime)
    if (isNegative(totalTime)) {
        clearInterval(x);
        message.innerHTML = "Your work time is over, take a break";
    }
}

function start() {
    var x = setInterval(count, 10);
}

function stop() {
    clearInterval(x);
}

// function reset() {

// }