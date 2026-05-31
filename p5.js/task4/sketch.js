function setup() {
  createCanvas(600, 400);
  background(0, 200, 0);
  startTime = millis();
}

function draw() {
  background(0, 200, 0);
  let elapsedTime = millis() - startTime;
  
  fill('#FFFF40');
  stroke(3);
  ellipse(100, 300, 80, 60);
  
  fill('#FFFF66')
  noStroke()
  ellipse(140, 250, 70, 64);
  
  fill('#FFFF80');
  stroke(10);
  ellipse(175, 200, 65, 63);
  
  let wave = (sin(elapsedTime * 0.1) + 1) / 2;
  
  let colorA = color('#FFFFCC');
  let colorB = color('#9900FF');
  
  let circleColor = lerpColor(colorA, colorB, wave);
  let circleSize = 70 + wave * 40;
  
  fill(circleColor);
  noStroke()
  circle(199, 180, circleSize);
  
  rectMode(CENTER);
  let range = width - 300; // 움직일 총 거리 조절
  let rectX = 500 + (frameCount % range);
  
  rect(rectX, 300 ,170, 100);
  
  stroke(10);
  line(100, 300, 140, 250);
  line(140, 250, 175, 200);
  line(175, 200, 199, 180);
  
  let randomColor = lerpColor(color(255, 0, 0), color(255, 255, 0), random(0, 0.3));
  fill(randomColor);
  
  let r = random(-2, 2);
  quad(220+r, 210+r, 260+r, 189+r, 240+r, 160+r, 210+r, 190+r);
  
  stroke(10)
  arc(500, 130, 80, 80, radians(200), radians(100))
  line(220, 210, 300, 130)
  noStroke()
  triangle(500, 170, 400, 250, 560, 250);
}