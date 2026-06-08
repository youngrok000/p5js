let bgColor;
let hatX = 0; 
let hatY = 0;

function setup() {
  createCanvas(600, 400);
  bgColor = color(245, 245, 235);
}

function draw() {
  background(bgColor);

  // 옷
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

  // 목
  let skinTone = color(245, 220, 195);
  fill(skinTone);
  noStroke();
  rect(300, 260, 75, 30, 10);

  // 귀
  fill(skinTone);
  ellipse(235, 180, 30, 40);
  ellipse(365, 180, 30, 40);

  // 얼굴
  fill(skinTone);
  noStroke();
  ellipse(300, 180, 130, 150);

  // 마우스 클릭 시 볼터치
  if (mouseIsPressed) {
    fill(255, 150, 150, 150); 
    ellipse(260, 200, 30, 15);
    ellipse(340, 200, 30, 15);
  }

  // 코
  fill(50, 15);
  ellipse(300, 202, 7, 15);

  // 헤드폰
  fill(80, 85, 90);
  noStroke();
  ellipse(250, 255, 35, 50);
  ellipse(350, 255, 35, 50);

  fill(50);
  ellipse(250, 255, 25, 40);
  ellipse(350, 255, 25, 40);

  // 모자 위치 이동 
  if (keyIsDown(LEFT_ARROW)) hatX -= 5;
  if (keyIsDown(RIGHT_ARROW)) hatX += 5;
  if (keyIsDown(UP_ARROW)) hatY -= 5;
  if (keyIsDown(DOWN_ARROW)) hatY += 5;
  

  // 모자
  fill(30);
  ellipse(300 + hatX, 100 + hatY, 12, 6);
  fill(50);
  noStroke();
  arc(300 + hatX, 160 + hatY, 135, 120, PI, TWO_PI);
  rect(300 + hatX, 150 + hatY, 110, 50, 20);

  noFill();
  stroke(80);
  strokeWeight(1);
  arc(300 + hatX, 155 + hatY, 90, 25, 0.1, PI-0.1);
  arc(300 + hatX, 162 + hatY, 80, 20, 0.2, PI-0.2);
  
  // 마우스 위치에 따라 눈 이동
  let eyeOffsetX = (mouseX - 300) / 30;
  let eyeOffsetY = (mouseY - 200) / 30;
  
  fill(50);
  noStroke();
  ellipse(280 + eyeOffsetX, 186 + eyeOffsetY, 10, 10);
  ellipse(320 + eyeOffsetX, 186 + eyeOffsetY, 10, 10);

  // 마우스 클릭 시 입벌림
  if (mouseIsPressed) {
    fill(200, 50, 50);
    noStroke();
    ellipse(300, 225, 25, 35);
  } else {
    noFill();
    stroke(100);
    strokeWeight(2);
    arc(300, 218, 35, 15, 0.2, PI-0.2);
  }
}

function keyPressed() {
  
  if (key === 'r' || key === 'R') {
    bgColor = color(255, 200, 200); 
  } else if (key === 'g' || key === 'G') {
    bgColor = color(200, 255, 200); 
  } else if (key === 'b' || key === 'B') {
    bgColor = color(200, 200, 255); 
  } else if (key === ' ') {
    bgColor = color(245, 245, 235); 
  }
  
  if (key === 's' || key === 'S') {
    saveGif('myCaricature', 10);
  }
}