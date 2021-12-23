
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
box.shapeColor="orange"
}

  function draw() 
{


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.x = box.x +3
  }// escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x = box.x -3
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   box.y = box.y -3
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y = box.y +3
  }
  


  
  drawSprites();
}

