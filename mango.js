class fruit{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
    
        }
       
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("mango.png")
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(RADIUS);
        fill("yellow");
        
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}