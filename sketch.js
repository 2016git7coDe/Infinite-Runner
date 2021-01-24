var START = 1;
var PLAY = 2;
var END = 3;
var gameState = 1;
var backg,backg_img;
var ground,ground_img,invisiblegr;
var mario,mario_img,outMario,outMario_img;
var crab,crab_img,crabG;
var snail,snail_img,snailG;
var frog,frog_img,frogG;
var goomba,goomba_img,goombaG;
var ghost,ghost_img,ghostG;
var bullet,bullet_img,bulletG;
var coin,coin_img,coinG;
var asteroid,asteroid,asteroidG;
var fireball,fireball_img,fireballG;
var ins,ins_img;
var gameover,gameover_img,restart,restart_img;
var score,kills,chances;
var sound;

function preload(){
  backg_img=loadImage("mb.jpg");
  ground_img=loadImage("ground.png");
  mario_img=loadImage("m2.gif");
  crab_img=loadImage("crab.gif");
  snail_img=loadImage("snail.gif");
  frog_img=loadImage("frog.gif");
  goomba_img=loadImage("goomba.gif");
  ghost_img=loadImage("ghost.gif");
  bullet_img=loadImage("bullet.gif");
  coin_img=loadImage("coin.gif");
  asteroid_img=loadImage("a2.png");
  fireball_img=loadImage("fireball.gif");
  outMario_img=loadImage("out mario.png");
  gameover_img=loadImage("gameOver.png");
  restart_img=loadImage("restart.png");
  ins_img=loadImage("mins.JPG");
  sound=loadSound("sound.wav");
  
}

function setup() {
 createCanvas(600,400);

  backg=createSprite(300,200,20,20);
  backg.addImage("i",backg_img);
  backg.scale=0.25;
  
  ground=createSprite(310,413,20,20);
  ground.addImage("g",ground_img);
  ground.scale=0.5;

  
  invisiblegr=createSprite(300,389,600,5);
  invisiblegr.visible=false;
  
  mario=createSprite(37,350,20,20);
  mario.addImage("m",mario_img);
  mario.scale=0.3;
  
  outMario=createSprite(37,360,20,20);
  outMario.addImage("o",outMario_img);
  outMario.scale=0.25;
  outMario.visible=false;
  
  gameover=createSprite(300,160,20,20);
  gameover.addImage("g",gameover_img);
  gameover.visible=false;
  
  restart=createSprite(300,230,20,20);
  restart.addImage("r",restart_img);
  restart.scale=0.1;
  restart.visible=false;
  
  ins=createSprite(300,200,20,20);
  ins.addImage("i",ins_img);
  ins.scale=0.92;

  
  crabG = new Group();
  snailG = new Group();
  frogG = new Group();
  goombaG = new Group();
  ghostG = new Group();
  bulletG = new Group();
  coinG = new Group();
  asteroidG = new Group();
  fireballG = new Group();
  
  score = 0;
  kills = 0;
  chances = 3;
}

function draw() {
 background(255);
  if(gameState === 1){
    ins.visible=true;
  }
  
  if(gameState === 1 && keyDown("s")){
      ins.visible=false;
      gameState = 2;
     }
  if(gameState === 2){
  ground.velocityX=-(4+score/5);
if(ground.x < 0){
  ground.x=310;
}
  
if(keyWentDown("f")){
   fireball1();
   fireball.y=mario.y;
   }
  
if(keyDown("space") && mario.y > 285){
   mario.velocityY=mario.velocityY-2;
   }
  mario.velocityY=mario.velocityY+0.8;
  
   
  
  if(fireballG.isTouching(crabG)){
    fireballG.destroyEach();
    crabG.destroyEach();
    kills=kills+1;
  }
  if(fireballG.isTouching(snailG)){
  fireballG.destroyEach();
  snailG.destroyEach();
  kills=kills+1;
  }
  
  if(fireballG.isTouching(frogG)){
  fireballG.destroyEach();
  frogG.destroyEach();
  kills=kills+1;
  }
  
  if(fireballG.isTouching(goombaG)){
  fireballG.destroyEach();
  goombaG.destroyEach();
  kills=kills+1;
  }
  
  if(fireballG.isTouching(ghostG)){
  fireballG.destroyEach();
  ghostG.destroyEach();
  kills=kills+1;
  }
  if(fireballG.isTouching(bulletG)){
    fireballG.destroyEach();
  }
    
  if(coinG.isTouching(mario)){
    coinG.destroyEach();
    score=score+2;
  }
    
  if(crabG.isTouching(mario)){
    crabG.destroyEach();
    chances=chances-1;   
  }  
  
  if(snailG.isTouching(mario)){
    snailG.destroyEach();
    chances=chances-1;
  }   
  
  if(frogG.isTouching(mario)){
    frogG.destroyEach();
    chances=chances-1;
  }    
    
  if(ghostG.isTouching(mario)){
    ghostG.destroyEach();
    chances=chances-1;
  }    
    
  if(goombaG.isTouching(mario)){
    goombaG.destroyEach();
    chances=chances-1;
  }    
    
  if(bulletG.isTouching(mario)){
    bulletG.destroyEach();
    chances=chances-1;
  }    
    
  if(asteroidG.isTouching(mario)){
    asteroidG.destroyEach();
    chances=chances-1;
  }  
 
  if(chances === 0){
    gameState = 3;
  }
  crab1();
  Snail1();
  frog1();
  goomba1();
  ghost1();
  bullet1();
  coin1();
  asteroid1();
}
    else if(gameState === 3){
    ground.velocityX=0;
    mario.visible=false;
    outMario.visible=true;
    gameover.visible=true;
    restart.visible=true;
    crabG.setVelocityXEach(0);
    snailG.setVelocityXEach(0);
    frogG.setVelocityXEach(0);
    goombaG.setVelocityXEach(0);
    ghostG.setVelocityXEach(0);
    bulletG.setVelocityXEach(0);
    asteroidG.setVelocityXEach(0);
    asteroidG.setVelocityYEach(0);
    coinG.setVelocityXEach(0);
    crabG.setLifetimeEach(-1);
    snailG.setLifetimeEach(-1);
    frogG.setLifetimeEach(-1);
    goombaG.setLifetimeEach(-1);
    ghostG.setLifetimeEach(-1);
    bulletG.setLifetimeEach(-1);
    asteroidG.setLifetimeEach(-1);
    coinG.setLifetimeEach(-1);
    } 
  if(mousePressedOver(restart) && gameState === 3){
    reset();
  }
  mario.collide(invisiblegr);
  drawSprites();
  if(gameState === 2 || gameState ===3){
    strokeWeight(6);
    stroke("darkblue");
    fill("lightblue");
    textFont("Jokerman");
    textSize(20);
    text("KILLS : "+ kills,15,60);
    strokeWeight(6);
    stroke("darkgreen");
    fill("lightgreen");
    textFont("Jokerman");
    textSize(20);
    text("Score : "+ score,15,30);
    strokeWeight(6);
    stroke("orange");
    fill("yellow");
    textFont("Jokerman");
    textSize(20);
    text("Chances : "+ chances,10,90);
  }
}

function crab1(){
  if (frameCount % 163 === 0){
  crab=createSprite(610,375,20,20);
  crab.addImage("c",crab_img);
  crab.scale=0.1;
  crab.velocityX=-(4+score/5);
  crab.setCollider("rectangle",0,0,crab.width,crab.height);
  crab.lifetime=170;
  crabG.add(crab);
  }
}  
function Snail1(){
  if(frameCount % 199 === 0){
  snail=createSprite(610,360,20,20);
  snail.addImage("s",snail_img);
  snail.scale=0.1;
  snail.velocityX=-(4+score/5);
  snail.lifetime=170;
  snailG.add(snail);
  }
}

function frog1(){
if(frameCount % 239 === 0){
  frog=createSprite(610,360,20,20);
  frog.addImage("f",frog_img);
  frog.scale=0.1;
  frog.velocityX=-(4+score/5);
  frog.lifetime=170;
  frogG.add(frog);
}
}

function goomba1(){
  if(frameCount % 211 === 0){
  goomba=createSprite(610,360,20,20);
  goomba.addImage("g",goomba_img);
  goomba.scale=0.15;
  goomba.velocityX=-(4+score/5);
  goomba.lifetime=170;
  goombaG.add(goomba);
  } 
}

function ghost1(){
  if(frameCount % 401 === 0){  ghost=createSprite(610,Math.round(random(200,300)),20,20);
  ghost.addImage("g",ghost_img);
  ghost.scale=0.2;
  ghost.velocityX=-(7+score/5); 
  ghost.lifetime=170;
  ghostG.add(ghost);
  }
}

function bullet1(){
  if(frameCount % 521 === 0){
  bullet=createSprite(610,Math.round(random(200,360)),20,20);
  bullet.addImage("b",bullet_img);
  bullet.scale=0.2;
  bullet.velocityX=-(7+score/5);
  bullet.lifetime=170;
  bulletG.add(bullet);
  }
}

function coin1(){
  if(frameCount % 179 === 0){
  coin=createSprite(610,Math.round(random(200,360)),20,20);
  coin.addImage("c",coin_img);
  coin.scale=0.15;
  coin.velocityX=-(4+score/5);
  coin.lifetime=170;
  coinG.add(coin);
  }
}

function asteroid1(){
  if (frameCount % 997 === 0){
  asteroid=createSprite(510,-10,20,20);
  asteroid.addImage("a",asteroid_img);
  asteroid.scale=0.03;
  asteroid.velocityY=7;
  asteroid.velocityX=-9;
  asteroid.lifetime=100;
  asteroidG.add(asteroid);
  }
}

function fireball1(){
  
  fireball=createSprite(37,350,20,20);
  fireball.addImage("aag ka gola",fireball_img);
  fireball.scale=0.15;
  fireball.velocityX=4;
  fireball.lifetime=150;
  fireballG.add(fireball);
}

function reset(){
  outMario.visible=false;
  gameover.visible=false;
  restart.visible=false;
  mario.visible=true;
  score=0;
  kills=0;
  chances=3;
  gameState = 1;
  crabG.destroyEach();
  snailG.destroyEach();
  frogG.destroyEach();
  goombaG.destroyEach();
  ghostG.destroyEach();
  bulletG.destroyEach();
  asteroidG.destroyEach();
  coinG.destroyEach();
  
}