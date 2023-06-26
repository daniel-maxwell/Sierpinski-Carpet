var startSize;
var functionCalls=0;
function setup() {
    createCanvas(900, 900);
    background(0);
    fill(255);
    noStroke();
    noSmooth();
    rectMode(CENTER);
    startSize = pow(3, 6); // 3 ^ 6
}

function draw() {
    translate(width/2, height/2);
    mySquare(startSize);
    noLoop();
}

function mySquare(side) {
    functionCalls++;
    side = side/3;

    if (side>=1){
        rect(0, 0, side, side);

        push();
        translate(-side, 0);
        mySquare(side);
        pop();
        
        push();
        translate(-side, -side);
        mySquare(side);
        pop();

        push();
        translate(0, -side);
        mySquare(side);
        pop();

        push();
        translate(side, -side);
        mySquare(side);
        pop();

        push();
        translate(side, 0);
        mySquare(side);
        pop();

        push();
        translate(side, side);
        mySquare(side);
        pop();

        push();
        translate(0, side);
        mySquare(side);
        pop();

        push();
        translate(-side, side);
        mySquare(side);
        pop();
    }

}