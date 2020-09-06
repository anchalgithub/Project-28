
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(30,40,20,30);
	boy.addImage(boy)


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  stone=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

  treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  mango1.display ();
  mango2.display ();
  mango3.display ();
  mango4.display ();
  mango5.display ();
  mango6.display ();
  mango7.display ();
  mango8.display ();
  mango9.display ();
  mango10.display ();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

//making sure when the stone the mango, it should  fall
function detectcollision(stone,mango){
mangoBodyPosition=lmango.body.Position
stoneBodyPosition=lstone.body.Position

var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if (keyCode ===32){
		Matter.Body.setPosition(stone.body),{x:235,y:420}
		launcher.attach(stone.body)
	}
}

