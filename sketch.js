
var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 50, 50);
  movingRect = createSprite(100,100,50,50);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

}
// Hello Aneesh
// We are live sharing
function draw() {
  background(0);  

  movingRect.x  = mouseX;
  movingRect.y = mouseY;

  // Logic to find if the two rectangles are coming in to contact:
  // The distance between the two rectangles < sum of half of the width of each rectangle
  
  // distance between 2 rectangles in the x direction
  var distanceFromLeft = fixedRect.x - movingRect.x;
  var distanceFromRight = movingRect.x - fixedRect.x;

  var distanceFromTop = fixedRect.y - movingRect.y;
  var distanceFromBottom = movingRect.y - fixedRect.y;


  // distance at which a collision canhappen

  var maxDistanceX = (fixedRect.width / 2) + (movingRect.width /2)
  var maxDistanceY = (fixedRect.height / 2) + (movingRect.height / 2)
   
  
  if(distanceFromLeft < maxDistanceX && distanceFromRight < maxDistanceX && distanceFromTop < maxDistanceY && distanceFromBottom < maxDistanceY ){
    // they are touching
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red"
  }else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue"
  }


  
  drawSprites();
}