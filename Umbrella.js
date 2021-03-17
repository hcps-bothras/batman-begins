class Umbrella{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image =  loadImage("walking_1.png");
        World.add(world, this.body);
      }

    updateY(){
      if(this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
  }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}