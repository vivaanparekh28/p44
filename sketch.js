const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine,world;
var water,waterimg,fireimg,fire,wall
var ground1,ground2
function preload(){
  backgroundImg = loadImage("./level.jpg");
waterimg=loadImage("./watergirl.png")
fireimg=loadImage("./Fireboy.png")
}
function setup() {
  createCanvas(1100,700);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
   water=createSprite(120,600,20,20)
water.addImage("water",waterimg)
water.scale=0.2
   fire=createSprite(70,600,20,20)
   fire.addImage("fire",fireimg)
   fire.scale=0.25
   ground1=createSprite(550,675,1100,20)
   ground1.visible=false
   ground2=createSprite(700,538,490,20)
   ground2.visible=false
  // fire=new Fireboy()
  // ground=new Ground()
  // water=new Watergirl()
}

function draw() {
  background(backgroundImg);
  Engine.update(engine) 
  // ground.display()
  // fire.display()
  // //fire.collide(ground) 
  water.velocityY=water.velocityY+0.3
  fire.velocityY=fire.velocityY+0.3
  fire.collide(ground1)
  water.collide(ground1)
  fire.collide(ground2)
  water.collide(ground2)
  // if(keyCode===100 && keyCode===119){
  //   water.y=water.y-10
  //   water.x=water.x+4
  // }
  if (keyCode===119){
    water.velocityY=-4
    water.velocityY=water.velocityY+0.3
  }
  if(keyDown("d")){
 water.velocityX=3
 
 
  }
  else{
    water.velocityX=0
  }
  if(keyDown("a")){
    water.velocityX=-3
  }
 

  if(keyDown(UP_ARROW)){
    fire.velocityY=-6
    fire.velocityY=fire.velocityY+0.8
  }
  if(keyDown(RIGHT_ARROW)){
    fire.velocityX=3
 
  }
  else{
    fire.velocityX=0
  }
  if(keyDown(LEFT_ARROW)){
    fire.velocityX=-3
  }
  
  
  // water.display()

  // waterkeys()

   drawSprites();
  
}
