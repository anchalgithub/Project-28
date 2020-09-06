class Pig {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("PluckingMangoes/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image, 0,0,this.r*2, this.r*2)
      imageMode(CENTER);
			ellipseMode(RADIUS)
      fill (255,0,255)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };