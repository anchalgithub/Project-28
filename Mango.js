class Bird {
    constructor(x, y) {
      var options = {
        isStatic:true,
        'friction': 1.0,
        'restitution':0
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("PluckingMangoes/mango.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      ellipseMode(CENTER)
      image(this.image, 0,0,this.r*2, this.r*2)
      pop();
    };
  };