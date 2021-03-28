console.log("Hello, Happy World!");

window.onload = displayClock();

// Setting -------------------------------------------------------------------

var background = "url('https://static.wikia.nocookie.net/bandori/images/6/69/A_Pop-up_Book_T.png')";
var pesanSideBar = "Happy Lucky Smile Yay";
var warnaPesanSidebar = "rgb(255, 255, 255)";
var warnaJam = "rgb(100, 10, 10)";
var warnaTulisanUtama = "rgb(100, 100, 100)";

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

// END ------------------------------------------------------------------------

function setup() {
    document.body.style.backgroundImage = background;
    document.getElementById("tulisanSideBar").innerHTML = pesanSideBar;
    document.getElementById("tulisanSideBar").style.color = warnaPesanSidebar;
    document.getElementById("waktu").style.color = warnaJam;
    document.getElementById("pesan-utama").style.color = warnaTulisanUtama;
}
setup();

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

