const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var maxDrops = 50;
var umbrella, umbrellaImage;
var ground;

function preload(){
    umbrellaImage = loadImage("walking_1.png");
}

function setup(){
   var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = createSprite(300,490,20,20);
    umbrella.scale = 0.6;
    umbrella.addImage(umbrellaImage);
    //ground = new Ground(300,700,7000,20);
    //umbrella = new Umbrella(340,490,500,500);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background (0)

//ground.display();
   //umbrella.display();
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()   
    } 

    drawSprites();
}   