function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(245, 245, 235);

  //옷
  noStroke();
  fill(160, 165, 170); 
  rectMode(CENTER);
  rect(300, 380, 320, 200, 100, 100, 0, 0); 

  stroke(130, 135, 140);
  strokeWeight(3);
  fill(170, 175, 180);
  ellipse(300, 280, 140, 40); 
  
  noStroke();
  fill(100);
  ellipse(300, 275, 110, 30);

  stroke(130, 135, 140);
  strokeWeight(2);
  noFill();
  triangle(285, 300, 315, 300, 300, 320);
  line(300, 288, 300, 300); 

  //목
  let skinTone = color(245, 220, 195);
  fill(skinTone);
  noStroke();
  rect(300, 260, 75, 30, 10); 

  //귀
  fill(skinTone);
  ellipse(235, 180, 30, 40); 
  ellipse(365, 180, 30, 40); 

  //얼굴
  fill(skinTone);
  noStroke();
  ellipse(300, 180, 130, 150); 

  //코
  fill(50, 15); 
  ellipse(300, 202, 7, 15);

  //헤드폰
  fill(80, 85, 90);
  noStroke();
  ellipse(250, 255, 35, 50); 
  ellipse(350, 255, 35, 50); 
  fill(50);
  ellipse(250, 255, 25, 40);
  ellipse(350, 255, 25, 40);

  //모자
  fill(30);
  ellipse(300, 100, 12, 6);
  fill(50);
  noStroke();
  arc(300, 160, 135, 120, PI, TWO_PI); 
  rect(300, 150, 110, 50, 20);
  noFill();
  stroke(80);
  strokeWeight(1);
  arc(300, 155, 90, 25, 0.1, PI-0.1);
  arc(300, 162, 80, 20, 0.2, PI-0.2);

  //눈
  fill(50);
  noStroke();
  ellipse(280, 186, 10, 10);
  ellipse(320, 186, 10, 10);

  //입
  noFill();
  stroke(100);
  strokeWeight(2);
  arc(300, 218, 35, 15, 0.2, PI-0.2);
}