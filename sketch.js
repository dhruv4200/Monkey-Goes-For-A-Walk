//Defining ground
  var ground,invisibleGround,groundi;

//Defining monkey
var monkey,monkeyImage;

//Defining Banana
var banana, bananaImage, bananaGroup;

//Defining Obstacles
var obstacles, obstacleImage, obstacleGroup, x;

//survival time
var score=0;


function preload(){

groundi=loadImage("ground.png");
  
monkeyImage=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
  
}

function setup(){
  createCanvas(600,400);

 // ground=createSprite(300,390,600,20);
   ground=createSprite(200,390,600,20);
   ground.shapeColor="green";
   ground.addImage(groundi);
   ground.scale=2.0;
  
  invisibleGround=createSprite(300,380,603,20);
  invisibleGround.visible=false;
  
  monkey=createSprite(80,350,50,80);
  monkey.addAnimation("walking",monkeyImage);
  monkey.scale=0.23;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  

}

function food(){
  
  var rand=random(120,200);
  
 
    banana=createSprite(620,200,30,40);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=rand;
    banana.velocityX=-4;
  
  
  lifetime=300;
  
  bananaGroup.add(banana);
    banana.depth=monkey.depth-1;
}
function obstacles(){
  
    obstacle=createSprite(620,330,30,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
  
  lifetime=300;
  
  obstacleGroup.add(obstacle);
   obstacle.depth=monkey.depth-banana.depth;
    monkey.depth=monkey.depth+obstacle.depth;
}

function draw(){
  background("lightblue");
  
  ground.velocityX=-5;
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  text("Suvival Time: "+score,100,50,textSize(20));
  score=Math.round(frameCount/frameRate());
  
    if(keyDown("space")&&monkey.isTouching(ground)){
  
    monkey.velocityY = -14;
      
  }
 console.log(monkey.x);
  monkey.velocityY=monkey.velocityY+1.5;
  
  if(frameCount%80==0){
  food();
  }
  
  if(frameCount%300==0){
    obstacles();
  }
  
  monkey.collide(invisibleGround);
  
  drawSprites();
  
}
