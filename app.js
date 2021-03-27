console.log("Hello, Happy World!");

window.onload = displayClock();

function displayClock() {
    let d = new Date().toLocaleTimeString();
    document.getElementById("waktu").innerHTML = d;
    setTimeout(displayClock, 1000);
}
