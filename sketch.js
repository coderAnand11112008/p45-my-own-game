var bgImg;
var soldier, soldierImg;
var woodenLog1, woodenLog2, woodenLog3, woodenLogImg;
var woodenBox1, woodenBox2, woodenBox3, woodenBoxImg;

function preload(){
  bgImg = loadImage("background.jpg");
  soldierImg = loadImage("soldier.jpg");
  woodenLogImg = loadImage("wooden log.jpg");
  woodenBoxImg = loadImage("wooden box.jpg");
}

function setup() {
  createCanvas(800,800);

  soldier = createSprite(400, 700);
  soldier.addImage(soldierImg);
  soldier.scale = 0.5;
  
  woodenLog1 = createSprite(400,400);
  woodenLog1.addImage(woodenLogImg);
  woodenLog1.scale = 0.5;

  woodenLog2 = createSprite(350,400);
  woodenLog2.addImage(woodenLogImg);
  woodenLog2.scale = 0.5;

  woodenLog3 = createSprite(445,400);
  woodenLog3.addImage(woodenLogImg);
  woodenLog3.scale = 0.5;

  woodenBox1 = createSprite(100,100);
  woodenBox1.addImage(woodenBoxImg);
  woodenBox1.scale = 0.5;
  
  woodenBox2 = createSprite(700,700);
  woodenBox2.addImage(woodenBoxImg);
  woodenBox2.scale = 0.75;

  woodenBox3 = createSprite(100,200);
  woodenBox3.addImage(woodenBoxImg);
  woodenBox3.scale = 0.5;
}

function draw() {
  background(bgImg);
  
  createEdgeSprites();
  soldier.collide(woodenBox1);
  soldier.collide(woodenBox2);
  soldier.collide(woodenBox3);
  soldier.collide(woodenLog1);
  soldier.collide(woodenLog2);
  soldier.collide(woodenLog3);
  
  if(keyWentDown(UP_ARROW)){
    soldier.velocityY = -5;
}

if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 5;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 5;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = -5;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
 drawSprites();
}