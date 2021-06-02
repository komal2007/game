var gameState='start';
var bgImg;
var game;
var playImg;
var playButton;
var track;
var trackImage;
var coinGroup, coinImage;
var monster, monsterImage;

function preload(){
  bgImg = loadImage("Bg.jpg");
  playImg = loadImage("play.png");
  trackImage = loadImage("path.png");
  coinImage = loadImage("coin.png");
  monsterImage = loadImage("monster.png");
  

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  coinGroup = new Group();

  playButton = createSprite(700,550);
  playButton.addImage(playImg);
  

  track = createSprite(530,300,displayWidth,displayHeight);
  track.scale=2;
  track.velocityY=5;

  monster = createSprite(700,550);
  monster.addImage(monsterImage);
  monster.scale=2;

  

  



  

  

 
 
}

function draw() {
  background("white")

  createCoin();

  
 
  
  

if(gameState === "start"){
  game.start()
  if(mousePressedOver(playButton)){
    gameState = "play";
    console.log("yes");
  
  }
}





if(gameState === "play"){
  
  track.addImage(trackImage);

  
  if(track.y>displayHeight){
    track.y=track.height/2-500
  }
}

  



  
   
  drawSprites();
}

function mousePressed(){
  

}

function createCoin(){
  if(World.frameCount % 200 == 0){
    var coin = createSprite(Math.round(random (150, 550),240, 500, 500));
    coin.addImage(coinImage);
    coin.scale=0.15;
    coin.velocity= 2;
    coin.lifetime=150;
    coinGroup.add(coin);
  }
}




