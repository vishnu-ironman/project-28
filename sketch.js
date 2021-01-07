
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tre;
var base;
var juno,boy;
var g;
var sto;
var mangoes1,mangoes2,mangoes3,mangoes4,mangoes5,mangoes6,mangoes7;
var slingShot;
function preload()
{
  g = loadImage("g.jpg");
  boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1800,500);


	engine = Engine.create();
	world = engine.world;

  tre = new Tree(1400,275,450,450);
  base = new Ground(900,480,1800,30);
  //juno = new Boy(650,400,250,250);
  sto = new stone(200,100,70);
  mangoes1 = new fruit(1520,270,70);
  mangoes2 = new fruit(1250,270,70,70);
  mangoes3 = new fruit(1350,200,70,70);
  mangoes4 = new fruit(1350,270,70,70);
  mangoes5 = new fruit(1450,200,70,70);
  mangoes6 = new fruit(1450,280,70,70);
  mangoes7 = new fruit(1450,130,70,70);
  slingShot = new SlingShot(sto.body,{x:650,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(g);

  


  image(boy,600,300,200,300);
  tre.display();
  base.display();
  //juno.display();
  sto.display();
  mangoes1.display();
  mangoes2.display();
  mangoes3.display();
  mangoes4.display();
  mangoes5.display();
  mangoes6.display();
  mangoes7.display();
  slingShot.display();

  detectCollision(sto,mangoes1);
  detectCollision(sto,mangoes2);
  detectCollision(sto,mangoes3);
  detectCollision(sto,mangoes4);
  detectCollision(sto,mangoes5);
  detectCollision(sto,mangoes6);
  detectCollision(sto,mangoes7);

  
  drawSprites();
 
}

function mouseDragged (){
  Matter.Body.setPosition(sto.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
 if(keyCode === 32){
  
  slingShot.launch(sto.body);
  Matter.Body.setPosition(sto.body,{x:205,y:100});
 }

}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance <= lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false)
}
}




