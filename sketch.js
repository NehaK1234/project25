
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;*/

var btn1;
var btn2,dus,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution:0.95,
    frictionAir: 0.1 
  };

  
   
  btn2 = createImg('but.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
  
 ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 ground= Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world, ground);
 
 dus = new dustbin(360,340,10,30);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background('pink');
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
fill("lightoriang");
ellipse(ball.position.x,ball.position.y,20);
fill("lightgreen");

dus.display();

}

function vForce()
{
 
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.05});
}




  


