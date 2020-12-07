class Ground {
    constructor (x,y,width,height){
        var options={
            restitution:0.3,
            fricttion:0.2,
            density:0.5
        }
        this.width = width;
        this.height = height;
        this.bodies = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.bodies);
    }

    display(){
        fill("grey")
        rectMode(CENTER)
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height)
        
    }
}