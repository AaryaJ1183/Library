var Rectangle1;
var Rectangle2;
var Bull1;
var Bull2;
var Rectangle3;
var  Rectangle4;
function setup() {
  createCanvas(800,400);
  Rectangle1 = createSprite(400,200,50,100);
  Rectangle1.shapeColor = "Green";
  Rectangle1.debug = true;
  Rectangle2 = createSprite(400,400,50,100);
  Rectangle2.shapeColor = "Red";
  Rectangle2.debug = true;
  Bull1 = createSprite(200,300,50,50);
  Bull1.shapeColor = "Orange";
  Bull1.debug = true;
  Bull1.velocityX = 5;
  Bull2 = createSprite(600,300,50,50);
  Bull2.shapeColor = "Pink";
  Bull2.debug = true;
  Bull2.velocityX = -5;
  Rectangle3 = createSprite(200,100,50,100);
  Rectangle3.shapeColor = "Green";
  Rectangle3.debug=true;
  Rectangle4 = createSprite(600,100,50,100);
  Rectangle4.shapeColor = "Pink";
  Rectangle4.debug=true;

  
}

function draw() {
  background(0);  
  drawSprites();

  Rectangle2.y = mouseY;
  Rectangle2.x = mouseX;

  

 
    if(isTouching(Rectangle2,Rectangle4)){
    Rectangle4.shapeColor = "Blue";
    Rectangle2.shapeColor = "Yellow";
    }
    else{
      Rectangle4.shapeColor = "Green";
      Rectangle2.shapeColor = "Red";
    }

  bounceOff(Bull1,Bull2);

  fill("White");
  textSize(17);
  text(mouseX + "," + mouseY, mouseX , mouseY);
}


