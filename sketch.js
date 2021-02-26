var goomba,goombaImg;

var backGround,backGroundImg

var Boss,Boss2,Boss3,Boss1

function preload()
{
	backGroundImg=loadImage("Background.png");

  goombaImg=loadImage("goombWalk.png");

  Boss1=loadImage("Boss1.png");
  Boss2=loadImage("Boss2.png");
  Boss3=loadImage("Boss3.png");  
}

function setup() {
	createCanvas(500,500);

  backGround=createSprite(250,250,500,30);
  backGround.addImage("backGround",backGroundImg);
  backGround.scale=1.5 
  backGround.x=backGround.width/2;

  goomba=createSprite(40,253,27,69);
  goomba.addImage("goombaWalk",goombaImg);
  goomba.scale=0.3
	

	//Create the Bodies Here.


	
  
}


function draw() {
  
  background("yellow");
  drawSprites();
  text(mouseX+" "+mouseY,mouseX,mouseY);
  backGround.velocityX=-3;

console.log(backGround.x); 

  if(backGround.x<0){
    //backGround.x=backGround.width/2;
    backGround.x=300;
  }
generateBosses();
  
 
}
function generateBosses() {
  if(frameCount % 100===0) {
    Boss=createSprite(415,241,10,40);
    Boss.velocityX=-3;
    var R=Math.round(random(1,3))
    switch(R){
      case 1:
        Boss.addImage("Boss1",Boss1)
       break;
      case 2:
        Boss.addImage("Boss2",Boss2)
        break;
      case 3:
        Boss.addImage("Boss3",Boss3)
        break;
      default:
        break;
    }
  }
}



