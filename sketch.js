var movingSprite, idleSprite

function setup() {
  createCanvas(800,400);
 movingSprite = createSprite(700, 200, 50, 50);
idleSprite = createSprite (400,200,50,50)
}

function draw() {
  background(255,255,255);  
  
  movingSprite.shapeColor = "red" 
  idleSprite.shapeColor = "red" 
  
   movingSprite.x = mouseX
   movingSprite.y = mouseY
  
  if (movingSprite.x - idleSprite.x < movingSprite.width/2 + idleSprite.width/2 && 
    idleSprite.x - movingSprite.x < movingSprite.width/2 + idleSprite.width/2 && 
    movingSprite.y - idleSprite.y < movingSprite.height/2 + idleSprite.height/2 &&
    idleSprite.y - movingSprite.y < movingSprite.height/2 + idleSprite.height/2) {
  
  movingSprite.shapeColor = "green"
  idleSprite.shapeColor = "green"
  }

 else  {
  movingSprite.shapeColor = "purple" 
  idleSprite.shapeColor = "purple"
 }




  drawSprites();


}
