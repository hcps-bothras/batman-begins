class Drops{
    constructor (x,y){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,3,options);
        this.x = x;
        this.y = y;
        this.radius = 3
        World.add(world, this.body);
    }

    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
    }
}