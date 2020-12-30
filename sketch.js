function setup() {
  createCanvas(800,1200);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
} 

function draw() {
  background(255);  
  strokeWeight(4);
  stroke("gold");
  fill(255);

  //ellipseMode(RADIUS)
  ellipse(400,400,680,680)
  textSize(20);
  noStroke();
  fill("black")
  text("12",400,150)
  text("3",650,400);
  text("6",400,650);
  text("9",150,400);

  text("1",540,200);
  text("2",620,283);
  text("4",620,513);
  text("5",540,600);
  text("11",260,200);
  text("10",180,283);
  text("8",180,513);
  text("7",260,600);

  var hr=hour();
  var min=minute();
  var sec= second();

  translate(400,400);
  rotate(-90)

  var scAngle=map(sec,0,60,0,360)
  var minAngle=map(min,0,60,0,360)
  var hrAngle=map(hr%12,0,12,0,360)

  push();
  stroke("blue");
  strokeWeight(4); 
  rotate(scAngle)
  line(0,0,200,0)
  pop();

  push();
  stroke("green");
  strokeWeight(4); 
  rotate(minAngle)
  line(0,0,150,0)
  pop();

  push();
  stroke("red");
  strokeWeight(4); 
  rotate(hrAngle)
  line(0,0,100,0)
  
  pop();

  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0,0,610,610,0,scAngle);
  stroke(0,255,0);
  arc(0,0,630,630,0,minAngle);
  stroke(0,0,255);
  arc(0,0,650,650,0,hrAngle);

  drawSprites();
}