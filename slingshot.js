class Slingshot {
    constructor (b1,p1){
        var option={
            bodyA:b1 , 
            pointB:p1,
            length:10 , 
            stiffness:0.04
        }
        this.chain = Constraint.create(option)
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }


    display(){
    if(this.chain.bodyA){
      line (this.chain.bodyA.position.x , this.chain.bodyA.position.y,this.chain.pointB.x , this.chain.pointB.y)
    }
    }
}