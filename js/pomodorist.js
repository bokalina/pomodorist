var totalTime = 61;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var x;

// function isNegative(num) {
//     if (isNaN(num)) {
//         return false;
//     }
//     return Math.min(num, 0) != 0;
// }

function count() {
    var mins = Math.floor(totalTime / 60);
    var secs = totalTime - mins * 60;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    totalTime--;
    // console.log(totalTime)
    // debugger;
    if (totalTime === 0) {
        stop();
        message.innerHTML = "Your work time is over, take a break";
    }
}

function start() {
    x = setInterval(count, 100);
}

function stop() {
    clearInterval(x);
}

function reset() {
    location.reload();
}