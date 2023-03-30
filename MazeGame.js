var gamestate = "SM"
var MiNutes = 2
var SecoNds = 60
function preload(){
    boyStanding=loadAnimation("Images/boy3.png");
    boyRunning=loadAnimation("Images/boy1.png","Images/boy2.png","Images/boy3.png");
    hblock=loadImage("Images/hblock.png")
    vblock=loadImage("Images/vblock.png")
    Singermoonman=loadImage("Images/moonstone.png")
    manman=loadImage("Images/SkyBlueImage.jfif")
    girlgirl=loadImage("Images/GameOverImage.jfif")
    WinnerWinner=loadImage("Images/WinnerWinner.jpg")
}

function setup(){
    createCanvas(windowWidth-10,windowHeight-10);
    boy=createSprite(windowWidth/2,windowHeight/2);
    boy.addAnimation("standinforev",boyStanding);
    boy.addAnimation("runningforevs",boyRunning);
    boy.scale=0.15;
    moonstone=createSprite(1448,320);
    moonstone.addImage(Singermoonman);
    moonstone.scale=0.15;
    edman=createEdgeSprites()
    block1=createSprite(880,370,20,300);
    block1.addImage(vblock);
    block2=createSprite(620,234,300,20);
    block2.addImage(hblock);
    block3=createSprite(646,134,20,300);
    block3.addImage(vblock);
    block4=createSprite(750,450,300,20);
    block4.addImage(hblock);
    block5=createSprite(490,550,20,300);
    block5.addImage(vblock);
    block6=createSprite(1010,230,20,300);
    block6.addImage(hblock);
    block7=createSprite(1140,95,20,300);
    block7.addImage(vblock);
    block8=createSprite(680,680,20,300);
    block8.addImage(hblock);       
    block9=createSprite(1040,550,20,300);
    block9.addImage(vblock);
    block10=createSprite(1370,410,20,300);
    block10.addImage(hblock);    
    block11=createSprite(1300,275,20,300);
    block11.addImage(vblock);  
    invis=createSprite(470,windowHeight/2,20,height)  
    invis.visible=false
}

function draw(){
  background(manman);
  text(mouseX+","+mouseY,mouseX,mouseY)
  fill("Red")
  textSize(50)
  textFont("Cursive")
  text("Mysterious Maze",50,100)
  fill("black")

  if(gamestate==="SM"){
    textSize(30)
    textAlign(CENTER)
    text(":Use Arrow Keys To",200,200)
    text("Move The Player",200,250)
    text(":Collect The Moonstone",200,320)
    text(":Press Enter To Start",200,400)
    text(":You Have 3 Minutes",200,480)
    text("To Collect The Moonstone",200,530)
    
    if(keyDown("enter")){
      gamestate="PMA"
    }
    drawSprites();
  }

  if(gamestate==="PMA"){
    boy.changeAnimation("standinforev")
    if(keyDown("right")){
      boy.x += 5;
      boy.changeAnimation("runningforevs");
    }
    if(keyDown("left")){
      boy.x += -5;
      boy.changeAnimation("runningforevs");
    }
    if(keyDown("down")){
      boy.y += 5;
      boy.changeAnimation("runningforevs");
    }
    if(keyDown("up")){
      boy.y += -5;
      boy.changeAnimation("runningforevs");
    }
    if(
      boy.collide(edman)||
      boy.collide(block1)||
      boy.collide(block2)||
      boy.collide(block3)||
      boy.collide(block4)||
      boy.collide(block5)||
      boy.collide(block6)||
      boy.collide(block7)||
      boy.collide(block8)||
      boy.collide(block9)||
      boy.collide(block10)||
      boy.collide(block11)||
      boy.collide(invis)
    ){
      boy.x=width/2
      boy.y=height/2
    }
    if(SecoNds<10){
      textSize(40)
      text(MiNutes+":0"+SecoNds,170,360)
    }
    else{
      textSize(40)
      text(MiNutes+":"+SecoNds,170,360)
    }
    if(frameCount%30==0){
      SecoNds-=1
      if(SecoNds==0&&MiNutes>=1){
        MiNutes-=1
        SecoNds=60
      }
      if(SecoNds==0&&MiNutes==0){
        gamestate="STOPMAN"
      }
    }
    if(boy.isTouching(moonstone)) {
      gamestate = "winnerwinnerchickendinner"

    }
    drawSprites();
  }
  if(gamestate=="STOPMAN") {
    background(girlgirl)
    textSize(50)
    fill("red")
    textAlign(CENTER)
    text("GAME OVER",width/2,height/2)
    text("TIME IS UP",width/2,height/2+100)
  }  
  if(gamestate=="winnerwinnerchickendinner") {
    background(WinnerWinner)
    textSize(50)
    fill("green")
    textAlign(CENTER)
    text("YOU WIN",width/2,height/2)
    text("GOOD JOB",width/2,height/2+100)
  }
  console.log(frameCount)
}