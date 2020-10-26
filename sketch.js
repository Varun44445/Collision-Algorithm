var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);

 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "blue";
 movingRect.debug = true;

 fixedRect = createSprite(600,400,50,80);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
     movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.width/2 &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.width/2 ){
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}