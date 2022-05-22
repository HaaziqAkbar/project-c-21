
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var groundObj;
var ball;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1500, 700);

	
	engine = Engine.create();
	world = engine.world;

      var ball_option = {
       isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2   
	  }

     groundObj = new Ground(width/2,670,width,20);
	 leftSide = new Ground(1000,600,20,120);
	 rightSide = new Ground(800,600,20,120);

	//Create the Bodies Here.
	ball = Bodies.circle(200,20,15,ball_option);
	World.add(world,ball);

ellipseMode(RADIUS);

	Engine.run(engine);
    
	
}


function draw() {
  rectMode(CENTER);
  background(55);
  ellipse(ball.position.x,ball.position.y,15);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
  
}
  
function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5});

	}
}

                      