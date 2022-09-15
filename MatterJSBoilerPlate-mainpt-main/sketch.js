
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restituition:0.5,
		friction:0.02,
		frictionAir:0
	}
	var block2_options = {
		restituition:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3_options = {
		restituition:0.01,
		friction:1,
		frictionAir:0.3
	}
	 block1 = Bodies.circle(220,10,10,block1_options);
	 World.add(world,block1);

	 block2 = Bodies.rectangle(110,50,10,10,block1_options);
	 World.add(world,block2);

	 block3 = Bodies.rectangle(350,10,20,30,block1_options);
	 World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(block1.position.x,block1.position.y)
  rect(block2.position.x,block2.position.y)
  rect(block3.position.x,block3.position.y)
  drawSprites();
 
}



