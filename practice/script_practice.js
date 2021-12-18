function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    var stringBoxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";

    var border = "rgb(" + red + ", " + green + ", " + blue + ")"
    
    document.getElementById("cube") .style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("cube") .style.boxShadow = stringBoxShadow;
    document.getElementById("cube") .styleBorderColor = border;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}