const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new Ground(600,670,1600,20);
	dustbinObj=new Dustbin(1200,650);
	//Create a Ground
	



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

 
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:137,y:-145});

    
  	}
}




