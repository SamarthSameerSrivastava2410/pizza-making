var gameState 


function preload(){

  backgroundIMG = loadImage("images/background.png");
  buttonIMG = loadImage("images/buttons.png")

}



function setup(){
  createCanvas(1200,900);
  gameState = "shop"


  playButton = createSprite(600, 550, 20, 20);
  playButton.addImage("button", buttonIMG);

  
}

function draw() {
  background(backgroundIMG); 

  if(mousePressedOver(playButton)){
    console.log("hallo")



  }
  
  drawSprites();

  push();
  textSize(70);
  fill("black");
  textFont("Lucida Handwriting")
  text("PIZZA MAKING", 400, 350)
  pop();
  
}