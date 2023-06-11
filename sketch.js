var time = 1000;

function setup() {
    createCanvas(900, 600);
    background(0);
    rectMode(CENTER);
}

function draw() {
    background(0);
    var nX = noise(time);
    var locX = map(nX, 0, 1, 0, width);
    var g = map(nX, 0 , 1, 0, 255);

    var rotZ = map(nX, 0, 1, -25, 25);
    translate(locX, height/2);
    rotate(rotZ);
    fill(0, g, 0);
    rect(0, 0, 100, 100);
    time+=0.01;
}
