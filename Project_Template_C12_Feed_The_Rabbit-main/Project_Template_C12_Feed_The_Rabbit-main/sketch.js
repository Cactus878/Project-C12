var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX
  rabbit.y = World.mouseY

  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: spawnApple();
              break;
      case 2: spawnOrange();
              break;
      default:
        break;
    }

  drawSprites();
}

function spawnApple(){

  if (frameCount % 80 === 0) {
    var apple = createSprite(600,50,40,10);
    apple.x = Math.round(random(0,400));
    apple.addImage(appleImg);
    apple.scale = 0.1;
    
     //assign lifetime to the variable
    apple.lifetime = 200;
  }
}

function spawnOrange(){

  if (frameCount % 80 === 0) {
    var orange = createSprite(600,300,40,10);
    orange.x = Math.round(random(0,400));
    orange.addImage(orangeImg);
    orange.scale = 0.1;
    
     //assign lifetime to the variable
    orange.lifetime = 200;
  }
}