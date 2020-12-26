var tom,tomImg;
var jerry,jerryImg;
var spike,spikeImg,spikeGroup
var coin,coinImg;
var climber,climberImg,climberGroup;
var cloud,cloudImg;
var bg;
var t
var p
var invisibleBlock,invisibleBlockGroup;
function preload(){
bg=loadImage("background.png")
  tomImg=loadImage("Tom.png")
  climberImg=loadImage("climber.png")
  spikeImg=loadImage("Spike.png")
}

function setup()
 {
  createCanvas(600,1200);

  ground=createSprite(300,1180,600,30);
  tom= createSprite(500, 1170, 50, 50);
  tom.addImage(tomImg)
  tom.scale=0.3;
  climberGroup = createGroup();
  invisibleBlockGroup = createGroup();
  spikeGroup=createGroup();
}

function draw() {
  background(bg); 
  if (keyDown("space")) {
    tom.velocityY=-5;
}
tom.velocityY=tom.velocityY+0.5;
spawnClimbers();
 tom.collide(ground);
 if (keyDown(RIGHT_ARROW)) {
   tom.x=tom.x+3;
 }
 if (keyDown(LEFT_ARROW)) {
  tom.x=tom.x-3;
}
  if (tom.isTouching(invisibleBlockGroup)) {
    tom.velocityX=0;
    tom.velocityY=0;
  }
  if (tom.isTouching(spikeGroup)) {
    tom.velocityX=0;
    tom.velocityY=0;
  }

  drawSprites();
}
function spawnClimbers() {
  if (frameCount%300===0) {
      climber=createSprite(100,1200,50,20);
      climber.addImage(climberImg);
      climber.x=random(40,400);
      climber.y=random(30,1100);
      climberGroup.add(climber)
      climber.setCollider("rectangle",0,0,70,50)
      invisibleBlock=createSprite(10,10,30,30);
      invisibleBlock.shapeColor="red"
      invisibleBlock.x=climber.x;
      invisibleBlock.y=climber.y-22;
      invisibleBlock.width=climber.width;
      invisibleBlock.height=1;
      invisibleBlock.visible=false;

      tom.depth=climber.depth;
      invisibleBlockGroup.add(invisibleBlock);
      climber.debug=true;
      tom.collide(climberGroup)
      
      spike=createSprite(100,100,50,20);
      spike.addImage(spikeImg);
      t=climber.x+80;
      p=random(10,100)
      spike.x=t-p;
      spike.y=climber.y-60;
      //invisibleBlock.width=climber.width;
      //invisibleBlock.height=1;
      spike.scale=0.3;

      spikeGroup.add(spike);
      spike.debug=true;
      spike.setCollider("circle",0,0,75)
      tom.depth=spike.depth;
  }
}
