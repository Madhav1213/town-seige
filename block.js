class Block {
    constructor (x,y,width,height){
        var options= {
            restitution:0.4 ,
            density:0.6,
            friction:0.8
        }
        this.width = width;
        this.height = height;
        this.bodies = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.bodies);
    }

    display(){
        rectMode(CENTER)
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height)
    }
}