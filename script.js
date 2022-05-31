let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let mouseX, mouseY;
let circleX = 200;
let circleY = 300;
let circleColor = 'black';
let rectColor = "orange";
let rectX = 450;
let rectY = 250;
let redSquareX = 300;
let redSquareY = 25;
let pSquareX = 700;
let pSquareY = 500;

let leftKeyisPressed = false;
let rightKeyisPressed = false;
let upKeyisPressed = false;
let downKeyisPressed = false;
let wKeyisPressed = false;
let aKeyisPressed = false;
let sKeyisPressed = false;
let dKeyisPressed = false;


requestAnimationFrame(draw);
function draw() {
    // Background
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height); 

    // Black Circle
    ctx.fillStyle = circleColor;
    ctx.beginPath();
    ctx.arc(circleX, circleY, 50, 0, 2 * Math.PI);
    ctx.fill();

    let changeX = ((mouseX - circleX) ** 2)
    let changeY = ((mouseY - circleY) ** 2)
    let distance = Math.sqrt(changeX + changeY);

    if (distance < 50) {
        circleColor = "blue";
    } else {
        circleColor = "black";
    }

    // Orange Rectangle
    ctx.fillStyle = rectColor;
    ctx.fillRect(rectX, rectY, 120, 200)

    if (mouseX > rectX && mouseX < rectX + 120) {
        if (mouseY > rectY && mouseY < rectY + 200) {
            rectColor = "cyan";
        } else {
            rectColor = "orange";
        }
    } else {
        rectColor = "orange";
    }

    // Movement-Constrained Player Square
    ctx.fillStyle = "red";
    ctx.fillRect(redSquareX, redSquareY, 50, 50);

    // Movement of Red Square
    if (leftKeyisPressed) {
        redSquareX -= 5;
    } else if (rightKeyisPressed) {
        redSquareX += 5;
    } else if (upKeyisPressed) {
        redSquareY -= 5;
    } else if (downKeyisPressed) {
        redSquareY += 5;
    }

    // Movement Constraints
    if (redSquareX < 0) {
        redSquareX = 0
    } else if (redSquareX + 50 > 800) {
        redSquareX = 750;
    } else if (redSquareY < 0) {
        redSquareY = 0;
    } else if (redSquareY + 50 > 600) {
        redSquareY = 550;
    }

    // Wrap-Around Player Square
    ctx.fillStyle = "purple";
    ctx.fillRect(pSquareX, pSquareY, 50, 50);

    // Movement of Purple Square
    if (aKeyisPressed) {
        pSquareX -= 5;
    } else if (dKeyisPressed) {
        pSquareX += 5;
    } else if (wKeyisPressed) {
        pSquareY -= 5;
    } else if (sKeyisPressed) {
        pSquareY += 5;
    }

    // Wrap-Around Movement
    if (pSquareX < 0) {
        pSquareX = 750;
    } else if (pSquareX > 800) {
        pSquareX = 0;
    } else if (pSquareY < 0) {
        pSquareY = 550;
    } else if (pSquareY > 600) {
        pSquareY = 0;
    }

    // REQUEST ANIMATION FRAME
    requestAnimationFrame(draw);
}



// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}

function keydownHandler(event) {
    if (event.code === "ArrowLeft") {
        leftKeyisPressed = true;
    } else if (event.code === "ArrowRight") {
        rightKeyisPressed = true;
    } else if (event.code === "ArrowUp") {
        upKeyisPressed = true;
    } else if (event.code === "ArrowDown") {
          downKeyisPressed = true;
    } else if (event.code === "KeyW") {
        wKeyisPressed = true;
    } else if (event.code === "KeyA") {
        aKeyisPressed = true;
    } else if (event.code === "KeyS") {
        sKeyisPressed = true;
    } else if (event.code === "KeyD") {
        dKeyisPressed = true;
    }
} 

function keyupHandler(event) {
    if (event.code === "ArrowLeft") {
        leftKeyisPressed = false;
    } else if (event.code === "ArrowRight") {
        rightKeyisPressed = false;
    } else if (event.code === "ArrowUp") {
        upKeyisPressed = false;
    } else if (event.code === "ArrowDown") {
        downKeyisPressed = false;
    } else if (event.code === "KeyW") {
        wKeyisPressed = false;
    } else if (event.code === "KeyA") {
        aKeyisPressed = false;
    } else if (event.code === "KeyS") {
        sKeyisPressed = false;
    } else if (event.code === "KeyD") {
        dKeyisPressed = false;
    }
}