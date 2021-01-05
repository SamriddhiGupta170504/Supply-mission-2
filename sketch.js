const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,helicopterImage,packageImage,helicopter,package;
var box1,box2,box3;

function preload(){

	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")

}

function setup(){

	var canvas=createCanvas(700,700)

	engine=Engine.create();
	world=engine.world;

	helicopter=createSprite(350,200,20,20)
	helicopter.addImage(helicopterImage)
	helicopter.scale=0.5
	World.add(world,helicopter)

	ground=createSprite(350,680,700,20);
	World.add(world,ground)

	box1=new Box(100,600,10,50)
	box2=new Box(200,600,10,50)
	box3=new Box(150,680,100,10)

}

function draw(){
	
	Engine.update(engine)
	background("black")
	
	keypressed();
	spawnpackage();

	drawSprites();

	box1.display();
}

function spawnpackage(){

	package=createSprite(350,250,10,10)
	package.addImage(packageImage)
	package.scale=0.5
}

function keypressed(){
if	(keyCode === DOWN_ARROW){

spawnpackage();

}
}