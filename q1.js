var n = 2000;
var d = Date.now();

setTimeoutSync(display,n);

function display() {
    console.log("Funtion Executed after "+ n/1000 +" seconds")
}
function setTimeoutSync(display,n) {
    while (Date.now() < (d+n)){
    }
    display();
}




