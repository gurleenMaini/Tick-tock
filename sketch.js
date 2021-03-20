var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    textSize(18);
    noStroke();
    fill("white");
    text("12", 195,90);

    noStroke();
    fill("white");
    text("3", 310,205);

    noStroke();
    fill("white");
    text("9", 80,205);

    noStroke();
    fill("white");
    text("6", 200,310);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //seconds
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke("blue");
    strokeWeight(3);
    line(0,0,100,0);
    pop()

    //minutes
    push();
    rotate(mnAngle);
    stroke("lime");
    strokeWeight(5);
    line(0,0,85,0);
    pop()

    //hour
    push();
    rotate(hrAngle);
    stroke("magenta");
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(3);
    noFill();
    //Seconds
    stroke("blue");
    arc(0,0,300,300,0,scAngle);

    //Minutes
    strokeWeight(5);
    stroke("lime");
    arc(0,0,280,280,0,mnAngle);

    //Hour
    strokeWeight(7);
    stroke("magenta");
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
}
