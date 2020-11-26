const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,20);
  for (var k = 0; k <=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  div1 = new Division(10,640,10,300);
  div2 = new Division(80,640,10,300);
  div3 = new Division(160,640,10,300);
  div4 = new Division(240,640,10,300);
  div5 = new Division(320,640,10,300);
  div6 = new Division(400,640,10,300);
  div7 = new Division(470,640,10,300);

  for (var k = 0; k <divisions.length; k++){
    divisions[k].display();
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
}
function draw() {
  background(0); 

  
  for (var j = 0; j <particles.length; j++){
    particles[j].display();
  }


    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
  

  ground.display(); 
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  drawSprites();
}
