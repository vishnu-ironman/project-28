class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null
    }
    launch(body){
        this.sling.bodyA=body;
    }

    
}