function setup () {
  createCanvas(600, 400);
  background(200);
}

function draw() {
  noStroke()
  fill('#FFFFE5');
  quad(230, 250, 280, 290, 320, 290, 370, 250)
  rect(230, 160, 140, 90)
  arc(300, 160, 140, 100, radians(180), radians(360))
  fill(0);
  arc(300, 160, 145, 105, radians(180), radians(360))
  arc(300, 160, 130, 10, radians(0), radians(180))
  fill(255);
  ellipse(271, 190, 40, 18)
  ellipse(329, 190, 40, 18)
  fill(0);
  circle(271, 190, 13)
  circle(329, 190, 13)
  stroke(0);
  strokeWeight(2);
  line(260, 176, 284, 176)
  line(254, 178, 260, 176)
  line(284, 176, 286, 178)
  line(314, 178, 316, 176)
  line(316, 176, 340, 176)
  line(340, 176, 346, 178)
  line(300, 201, 294, 230)
  line(294, 230, 300, 230)
  fill('#FFC0C0');
  noStroke();
  arc(300, 253, 50, 13, radians(0), radians(180))
  triangle(275, 253, 325, 253, 300, 247)
  fill('#FFFFE5');
  arc(300, 247, 10, 5, radians(0), radians(180))
  rect(265, 265, 70, 60)
  stroke(0);
  strokeWeight(0.5);
  line(280, 290, 320, 290)
  line(265, 280, 280, 290)
  line(320, 290, 335, 280)
  fill(0, 0, 150);
  noStroke();
  rect(200, 325, 200, 100)
  fill(200);
  triangle(200, 325, 230, 325, 200, 350)
  triangle(400, 325, 370, 325, 400, 350)
  noFill();
  strokeWeight(2);
  stroke(0);
  rect(250, 181, 40, 18)
  rect(309, 181, 40, 18)
  line(290, 190, 309, 190)
}