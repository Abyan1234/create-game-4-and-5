var  thief, canvas, diamond,diamond1;
var guard1,guard2,guard3,guard4,guard5,guard6;
var edges;
var gameState,play, laser1, laser2;
var lose = 1;
var win = 0;
var lives = 3;
function setup(){
canvas = createCanvas(500,500);
    thief = createSprite(50,50,10,10);
    thief.shapeColor="red";
    
    thief1 = createSprite(200,200,10,10);
    thief1.shapeColor="black";
 

    diamond1 = createSprite(460,460,10,10);
    diamond1.shapeColor="black";
   
    diamond = createSprite(460,460,10,10);
    diamond.shapeColor="blue";
    

        laser1 = createSprite(100,400,100,5); 
        laser1.shapeColor="red";
        laser1.velocityX=6;
        
        laser2 = createSprite(300,200,100,5); 
        laser2.shapeColor="red";
        laser2.velocityX=-6;

    //Guards
    guard1 = createSprite(150,50,10,10);
    guard1.shapeColor="cyan";
   guard1.velocityY=10;
 



    guard2 = createSprite(250,460,10,10);
    guard2.shapeColor="cyan";
    guard2.velocityY=-10;

    guard3 = createSprite(350,50,10,10);
    guard3.shapeColor="cyan";
    guard3.velocityY=10;

    guard4 = createSprite(50,150,10,10);
    guard4.shapeColor="cyan";
    guard4.velocityX=10;

    guard5 = createSprite(460,250,10,10);
    guard5.shapeColor="cyan";
    guard5.velocityX=-10;

    guard6 = createSprite(50,350,10,10);
    guard6.shapeColor="cyan";
    guard6.velocityX=10;


    gameState=play;
}

function draw(){
    background("black");
edges = createEdgeSprites();

//Guards bounce of edges
guard1.bounceOff(edges);
guard2.bounceOff(edges);
guard3.bounceOff(edges);
guard4.bounceOff(edges);
guard5.bounceOff(edges);
guard6.bounceOff(edges);
laser1.bounceOff(edges);
laser2.bounceOff(edges);

thief.collide(edges);


if(lives===0){

    gameState=lose;
}
if(thief.isTouching(diamond1)){
gameState=win;
}

if(gameState===win){
   background("black");
   guard1.x=600;
   guard1.velocityX=0;
 
   guard2.x=600;
   guard2.velocityX=0;
   
   guard3.x=600;
   guard3.velocityX=0;
    guard4.x=600;
    guard4.velocityX=0;
   
    guard5.x=600;
    guard5.velocityX=0;
    guard6.x=600;
    guard6.velocityX=0;
    
   
    
    laser1.x=600;
   laser1.velocityX=0;
   laser2.x=600;
   laser2.velocityX=0;
  diamond.x=600
    diamond1.x=600;
    thief.x=200;
    thief.y=200;
   thief1.shapeColor="red";
    stroke(30);
    fill("cyan");
    text("YOU WIN",200,190);
diamond.x=210;
diamond.y=200;
fill("magenta");
textSize(18);
text("PRESS SPACE TO RESTART",130,300)

if(keyDown("space")){
    gameState=play;
lives=3;
guard1.x=150;
guard1.y=50;
guard1.velocityX=0;
guard2.x=250;
guard2.y=460;
guard2.velocityX=0;

guard3.x=350;
guard3.y=50;
guard3.velocityX=0;

guard4.x=50;
guard4.y=150;
guard4.velocityX=10;

guard5.x=460;
guard5.y=250;
guard5.velocityX=-10;
guard6.x=50;
guard6.y=350;
guard6.velocityX=10;



laser1.x=100;
laser1.y=400;
laser1.velocityX=6;

laser2.x=300;
laser2.y=200;
laser2.velocityX=-6;
diamond.x=460
diamond.y=460;
diamond1.y=460;
diamond1.x=460;
thief1.shapeColor="black";
thief.x=50;
thief.y=50;
}
}
if(gameState===lose){
background("black");
    guard1.x=600;
    guard1.velocityX=0;
    guard2.x=600;
    guard2.velocityX=0;
   
    guard3.x=600;
    guard3.velocityX=0;
    guard4.x=600;
    guard4.velocityX=0;
   
    guard5.x=600;
    guard5.velocityX=0;
    guard6.x=600;
    guard6.velocityX=0;
    
   
    
    laser1.x=600;
   laser1.velocityX=0;
   laser2.x=600;
   laser2.velocityX=0;
  diamond.x=600
    diamond1.x=600;
    thief1.shapeColor="red";
   thief.x=200;
    thief.y=200;
    stroke(30);
    fill("red");
    text("YOU LOSE",200,180);
    fill("magenta");
    textSize(18);
    text("PRESS SPACE TO RESTART",130,300)
    
    if(keyDown("space")){
    gameState=play;
lives=3;
guard1.x=150;
guard1.y=50;
guard1.velocityX=0;
guard2.x=250;
guard2.y=460;
guard2.velocityX=0;

guard3.x=350;
guard3.y=50;
guard3.velocityX=0;

guard4.x=50;
guard4.y=150;
guard4.velocityX=10;

guard5.x=460;
guard5.y=250;
guard5.velocityX=-10;
guard6.x=50;
guard6.y=350;
guard6.velocityX=10;



laser1.x=100;
laser1.y=400;
laser1.velocityX=6;

laser2.x=300;
laser2.y=200;
laser2.velocityX=-6;
diamond.x=460
diamond1.x=460;
thief1.shapeColor="black";
thief.x=50;
thief.y=50;
}

}


textSize(18);
fill("white");
text("Lives"+" "+"="+"" +lives,20,20);

//Controls
if(gameState===play){
    
    if(thief.isTouching(guard1) || thief.isTouching(guard2) ||thief.isTouching(guard3)||thief.isTouching(guard4) ||thief.isTouching(guard5) ||thief.isTouching(guard6))
    {
    lives=lives-1;
    thief.x=50;
    thief.y=50;
    }
   
    if(thief.isTouching(laser1)||thief.isTouching(laser2)){
        thief.x=50;
        thief.y=50;
        guard1.velocityY=14;
        guard2.velocityY=-14;
        guard3.velocityY=14;
        guard4.velocityX=14;
        guard5.velocityX=-14;
        guard6.velocityX=14;
       
    }
   
    textSize(18);
    fill("white");
    text("Lives"+" "+"="+"" +lives,20,20);
    
    if(keyDown("up")){

    thief.y=thief.y-5;
}

if(keyDown("down")){

    thief.y=thief.y+5;
}

if(keyDown("left")){

    thief.x=thief.x-5;
}

if(keyDown("right")){

    thief.x=thief.x+5;
}}



drawSprites();




}