var J2008;

var backGround,backGroundImg;




function preload()
{
	backGroundImg=loadImage("")
}

function setup() {
	createCanvas(1200, 500);

  J2008=createSprite(200,230,27,69);

  backGround=createSprite(600,250,30,30);


	

	//Create the Bodies Here.


	
  
}


function draw() {
  
  background("yellow");
  text(mouseX+" "+mouseY,mouseX,mouseY);
  drawSprites();
 
}



