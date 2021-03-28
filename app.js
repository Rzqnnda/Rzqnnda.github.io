console.log("Hello, Happy World!");

window.onload = displayClock();

let panelVisible = false;

var timeToChange = 3;
let pesan = [
    "Happy",
    "Lucky",
    "Smile",
    "Yay!",
    "Kokoro Best Girl UwU"
];
var timer = 0;
let pesanSaatIni = 0;

function displayClock() {
    let d = new Date().toLocaleTimeString();
    document.getElementById("waktu").innerHTML = d;

    if (timer++ == timeToChange) {
        document.getElementById("pesan-utama").innerHTML = pesan[pesanSaatIni++];
        if (pesanSaatIni == pesan.length) pesanSaatIni = 0;
        timer = 0;
    }

    setTimeout(displayClock, 1000);
}

function klik() {
    document.getElementById("panel-base").style.visibility = (!panelVisible ? "visible" : "hidden");
    panelVisible = !panelVisible;
}
