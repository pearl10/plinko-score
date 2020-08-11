const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles =[];
var plinkos=[];
var score=0;
var particle;
var turn=0;
var  division=[];
var  divisionHeight=300
var gamestate;
var play=1;
//var end=0;
function setup() {
  createCanvas(900,800);
  engine = Engine.create();
    world = engine.world;
  for(var k=0;k<=width;k=k+90){
division.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
 }

 

for(var j=10;j<width;j=j+50){
  plinkos.push(new Plinko(j,75))

}
for(var j=50;j<width;j=j+50){
  plinkos.push(new Plinko(j,150))

}
for(var j=10;j<width;j=j+50){
  plinkos.push(new Plinko(j,250))

}
for(var j=50;j<width;j=j+50){
  plinkos.push(new Plinko(j,350))

}
for(var j=10;j<width;j=j+50){
  plinkos.push(new Plinko(j,450))

}

}

function draw() {
  
  Engine.update(engine);
  background(0);
  text("score:"+score,350,40)  
  text("500",40,500)  
  text("500",120,500)  
  text("500",220,500)  
  text("500",300,500)  
  text("100",400,500)  
  text("100",490,500)  
  text("100",570,500)  
  text("200",670,500)  
  text("200",760,500)  
  text("200",840,500)
 

  
  for(var k=0;k<division.length;k++) {
    division[k]. display ()}
  
   for(var j =0;j<plinkos.length;j++){
   plinkos[j].display();

   }
   
  
    if(particle!=null)
   { 
 particle.display();
 
     
 
    
   
   
   if(particle.Body.Position.x<300){
   score=score++;
   particle=null;
   if(count>5)gamestate="end";
   }
 
 }

    if(particle!=null)
   { 
 particle.display();
 
     
 
     if(particle.body.position.x>600){
   
   
   if(particle.body.position.x<301){
   score=score++;
   particle=null;
   if(count>5)gamestate="end";
   }
 } 
 }
  
 if(particle!=null)
 { 
particle.display();

   

   if(particle.body.position.x>900){
 
 
 if(particle.body.position.x<601){
 score=score++;
 particle=null;
 if(count>5)gamestate="end";
 }
} 
}

   
   //if(particles!=null){
     // if(particles.body.position.x<800){
   // if(particles.body.position.x>400){
    //score=score+100
     //}
    //}
     //}
     if(gamestate==="end"){

      text("GAME OVER")
     }
    drawSprites();
}

function mousePressed(){
if(gamestate!=="end"){

turn++
particles=new Particle(mouseX,10,10,10)
}
}
