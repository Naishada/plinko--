var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions1 = [];
var divisionHeight=300;
var ground1;
var score =0;
var particle;
var turn = 0;
var line;
gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  //line = new Ground(400,460,800,2);

   for (var k = 0; k <=width; k = k + 80) {
     divisions1.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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

    if(particle = null)
    {
      particle.display();

      if(particle.body.position.y>530)
      {
        if(particle.body.position<86){
          score = score+2000;
          particle=null;
          if(count=5){
            gameSate === "end";
          }
        }
      }
    }

    
}
 


function draw() {
  background("black");
 // line.display();
  textSize(20)
 text("Score : "+score,20,30);
 text("2000",12,530);
 text("1500",95,530);
 text("1000",168,530);
 text("800",245,530);
 text("10",330,530);
 text("100",411,530);
 text("50",486,530);
 text("2000",568,530);
 text("1500",652,530);
 text("1000",738,530);
 text(mouseX+","+mouseY,mouseX,mouseY);

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
   for (var k = 0; k < divisions1.length; k++) {
     
     divisions1[k].display();
   }
}
function mousePressed(){
  if(gameState === "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}