var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle;
var turn = 0;

var gameState = "play"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
  
  }

  
    

 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30)
  text(" 500 ",5,530);
  text(" 500 ",85,530);
  text(" 500 ",165,530);
  text(" 500 ",245,530);
  text(" 100 ",325,530);
  text(" 100 ",405,530);
  text(" 100 ",485,530);
  text(" 200 ",565,530);
  text(" 200 ",645,530);
  text(" 200 ",725,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     
    particle.display();

    if(particle.body.position.y>760){
      if (particle.body.position.x<300){

        score = score+500
        particle = null
        if(turn>=5) gameState = "end";

      } 
       if (particle.body.position.x>301 && particle.body.position.x<600 ){

        score = score+100
        particle = null
        if(turn>=5) gameState = "end";

      }
       if (particle.body.position.x>601 ){

         score = score+100
        particle = null
        if(turn>=5) gameState = "end";

      }
    }
  }
   
   if(gameState === "end"){
     text("GAME OVER",400,400)
   }
  


}

function mousePressed(){
  if(gameState!=="end"){
    turn++
    particle = new Particle(mouseX,10,10,10)
  }
}