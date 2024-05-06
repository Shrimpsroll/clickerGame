// Variable Declaration
var points = 0;

// intervals
setInterval(tick, 100);
setInterval(second, 1000);

function tick(){
    document.getElementById("points").innerHTML = points.toLocaleString();
}