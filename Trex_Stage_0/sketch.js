
var trex ,trexImg;

var ground, groundImg;

function preload(){
  
trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");

groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex= createSprite(50, 150, 50, 150);

  trex.addAnimation("trexMoving", trexImg);
trex.scale=0.5;


  ground=createSprite(300, 180, 600, 10)
  ground.addImage("floor", groundImg);
}

function draw(){
  background("black");

  if(keyDown("up"))  {
trex.velocityY=-5;
  }
  
trex.velocityY=trex.velocityY + 0.5;

trex.collide(ground);

drawSprites();
}
