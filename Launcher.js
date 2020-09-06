class Launcher{
    constructor(body,anchor) {
        var options = { bodyA:Body,
            pointB:anchor,
            stiffness:0.001,
            length:1
        }
        this.bodyA = body
        this.pointB=anchor
        this.launcher=Constraint.create(options)
        World.add(world, this.launcher);
      }
      
      //making different functions, so we can call them later on.
      attach(body){
        this.launcher.bodyA=body;
      }

      fly(){
      this.launcher.bodyA=null;
      }
      display(){
        if(this.launcher.bodyA)
        {
          var pointA=this.bodyA.position;
          var pointB=this.pointB
    
          strokeWeight(2);		
          line(pointA.x,pointA.y,pointB.x,pointB.y);


      }
      
  }
}