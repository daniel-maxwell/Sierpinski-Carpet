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
    translate(locX, height/2);
    fill(255);
    rect(0, 0, 100, 100);
    time+=0.01;
}
