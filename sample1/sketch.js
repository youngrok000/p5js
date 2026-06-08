function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(18, 28, 65);
  //별
  stroke(255, 255, 200);
  strokeWeight(8);
  point(95, 82);
  point(243, 47);
  point(415, 123);
  //별똥별
  stroke(200, 240, 255);
  strokeWeight(3);
  line(0, 75, 195, 155);
  //달
  fill(255, 225, 90);
  noStroke();
  circle(490, 95, 105);
  //뒷산
  fill(42, 58, 105);
  noStroke();
  triangle(45, 305, 240, 115, 455, 310);
  //앞산
  fill(58, 82, 122);
  triangle(185, 305, 410, 145, 620, 305);
  //땅
  fill(32, 43, 52);
  rect(0, 302, 620, 110);
  //집
  fill(218, 185, 148);
  noStroke();
  rect(148, 262, 62, 42);
  //지붕
  fill(195, 75, 75);
  stroke(45, 28, 18);
  strokeWeight(2);
  quad(138, 262, 162, 228, 198, 228, 218, 262);
  //창문
  fill(255, 255, 140);
  noStroke();
  rect(157, 272, 16, 16); 
  //문
  fill(95, 58, 38);
  rect(184, 277, 14, 27);
}