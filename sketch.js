var zombie;
var backgroundimg

function preload(){
backgroundimg=loadImage("images/zombie background.jpg")



}

function setup()
{
  createCanvas(windowWidth,windowHeight);
zombie= createSprite(50,100,20,50)

}

function draw() 
{
  background(backgroundimg);
  console.log(mouseX + "," + mouseY)




  drawSprites();
  
 
}


