function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 하늘 배경색이 시간에 따라 자연스럽게 변함
  let c1 = color(18, 28, 65);
  let c2 = color(30, 45, 90);
  // sin()과 frameCount를 활용하여 0과 1 사이를 왕복하는 값 생성
  let lerpAmount = map(sin(frameCount * 0.05), -1, 1, 0, 1);
  background(lerpColor(c1, c2, lerpAmount));

  // 별들의 크기가 각기 다른 주기로 반짝임
  stroke(255, 255, 200);
  strokeWeight(8 + sin(frameCount * 0.1) * 3);
  point(95, 82);
  strokeWeight(8 + cos(frameCount * 0.05) * 4);
  point(243, 47);
  strokeWeight(8 + sin(frameCount * 0.08) * 2);
  point(415, 123);

  // 별똥별이 대각선으로 계속해서 떨어짐
  stroke(200, 240, 255);
  strokeWeight(3);
  let shootingX = (frameCount * 8) % (width + 200) - 100;
  let shootingY = 20 + (shootingX * 0.6);
  line(shootingX, shootingY, shootingX + 50, shootingY + 30);

  // 달이 위아래로 부유하며 크기가 커졌다 작아짐
  fill(255, 225, 90);
  noStroke();
  let moonSize = 105 + sin(frameCount * 0.05) * 10;
  let moonY = 95 + sin(frameCount * 0.02) * 5;
  circle(490, moonY, moonSize);

  // 뒷산
  fill(42, 58, 105);
  noStroke();
  triangle(45, 305, 240, 115, 455, 310);
  
  // 앞산
  fill(58, 82, 122);
  triangle(185, 305, 410, 145, 620, 305);
  
  // 땅
  fill(32, 43, 52);
  rect(0, 302, 620, 110);
  
  // 집
  fill(218, 185, 148);
  noStroke();
  rect(148, 262, 62, 42);
  
  // 지붕
  fill(195, 75, 75);
  stroke(45, 28, 18);
  strokeWeight(2);
  quad(138, 262, 162, 228, 198, 228, 218, 262);
  
  // 창문 불빛이 random()에 의해 가끔씩 깜빡이는 효과
  noStroke();
  if (frameCount % 60 < 3) {
    fill(random(200, 255), random(200, 255), random(100, 150));
  } else {
    fill(255, 255, 140);
  }
  rect(157, 272, 16, 16); 
  
  // 문
  fill(95, 58, 38);
  rect(184, 277, 14, 27);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('p5js', 4);
  }
}