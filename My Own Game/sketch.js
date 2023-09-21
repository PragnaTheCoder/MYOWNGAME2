
var bg, bgImage , gameState="start";
var mermaid,mermaidImg;
var shark, sharkImg;



function preload()
{
  bgImage=loadImage("./assets/UnderWaterBg3.jpg");
  mermaidImg = loadAnimation("assets/Mermaid.gif");
  sharkImg = loadAnimation("assets/Shark.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg= createSprite(windowWidth / 2, windowHeight / 2 ,windowWidth+100, windowHeight);
  bg.addImage(bgImage);
  bg.scale = 5.5;
  bg.velocityX = -7;

  mermaid= createSprite(100, windowHeight /2);
  mermaid.addAnimation("mermaid image", mermaidImg);
  mermaid.mirrorX(-1);
  mermaid.scale = 0.4;

  shark= createSprite(windowWidth-100, windowHeight /2);
  shark.addAnimation("shark image", sharkImg);
  shark.scale=1 ;

 
}

function draw() 
{
  background(0);

  if(gameState == "start") {
    //infinte bg
    if(bg.x <100){
      bg.x = windowWidth-100
    }

    //movement of the mermaid
    if(keyDown("UP_ARROW")){
     mermaid.y -= 5
    }
    if(keyDown("DOWN_ARROW")){
      mermaid.y += 5
     }
  }
    

  
  
  drawSprites();
}


