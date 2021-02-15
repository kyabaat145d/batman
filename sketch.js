const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var man1, createDrop;


function preload(){
    thunderAnimation = loadAnimation("sprites/1.png", "sprites/2.png", "sprites/3.png", "sprites/4.png");
    walkAnimation = loadAnimation("sprites/walking_1.png", "sprites/walking_2.png", "sprites/walking_3.png", "sprites/walking_4.png",
    "sprites/walking_5.png", "sprites/walking_6.png", "sprites/walking_7.png", "sprites/walking_8.png");

}

function setup(){
 createCanvas(400,1200);
 engine = Engine.create();
    world = engine.world;

man1 = new man(200,1100);




    
}

function draw(){
    background("black");
    Engine.update(engine);

rain();
man1.display();
}   

function rain(){
    var maxDrops=100;

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));

    }
}