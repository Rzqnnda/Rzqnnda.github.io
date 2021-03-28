console.log("Hello, Happy World!");

window.onload = displayClock();

let panelVisible = false;

function displayClock() {
    let d = new Date().toLocaleTimeString();
    document.getElementById("waktu").innerHTML = d;
    setTimeout(displayClock, 1000);
}

function klik() {
    document.getElementById("panel-base").style.visibility = (!panelVisible ? "visible" : "hidden");
    panelVisible = !panelVisible;
}
