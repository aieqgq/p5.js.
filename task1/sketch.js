function setup() {
  createCanvas(600, 400);
  background(0, 200, 0);
}

function draw() {
  background(0, 200, 0);
  
  fill('#FFFF40');
  stroke(3);
  ellipse(100, 300, 80, 60);
  
  fill('#FFFF66')
  noStroke()
  ellipse(140, 250, 70, 64);
  
  fill('#FFFF80');
  stroke(10);
  ellipse(175, 200, 65, 63);
  
  fill(255, 0, 0);
  noStroke()
  circle(199, 180, 60);
  
  rectMode(CENTER);
  
  rect(480, 300 ,170, 100);
  
  stroke(10);
  line(100, 300, 140, 250);
  line(140, 250, 175, 200);
  line(175, 200, 199, 180);
  
  fill(0, 255, 255);
  
  quad(220, 210, 260, 189, 240, 160, 210, 190);
  
  stroke(10)
  arc(500, 130, 80, 80, radians(200), radians(100))
  line(220, 210, 300, 130)
  noStroke()
  triangle(500, 170, 400, 250, 560, 250);
}
