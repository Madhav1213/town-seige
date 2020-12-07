const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var polygon_image,slingshot;

function preload (){
    polygon_image = loadImage ("polygon.png");

}

function setup(){
    createCanvas(1200,400)
    engine = Engine.create()
    world = engine.world
    //first row
    block8 = new Block (330,235,30,40);
    block9 = new Block (360,235,30,40);
    block10 = new Block (390,235,30,40);
    block11 = new Block (420,235,30,40);
    block12 = new Block (450,235,30,40);
    
    //second row
    block13 = new Block (360,195,30,40);
    block14 = new Block (390,195,30,40);
    block15 = new Block (420,195,30,40);

    //last row
    block16 = new Block (390,155,30,40);
    var options= {
        restitution:0.4 ,
        density:0.6,
        friction:0.8
    }
    //polygon holder with slings
    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);
    console.log(polygon)
    slingshot = new Slingshot (polygon,{x:50,y:150});
    
}

function draw(){
    background(180)
    imageMode (CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);
    fill ("blue")
    block8.display();
    block9.display();
    block10.display(); 
    block11.display();
    block12.display();
    fill("red")
    block13.display();
    block14.display(); 
    block15.display(); 
    fill ("green")
    block16.display();    
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

