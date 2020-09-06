class Tree {
constructor(x,y){
    this.x=x;
    this.y=y;
    this.dustbinWidth=450;
    this.dustbinHeight=600;
    this.wallThickness=10;

    //creating a box type body for the tree then adding it to a world.
this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
this.leftBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
World.add(world, this.bottomBody)
World.add(world, this.leftBody)
World.add(world, this.rightBody);

this.image = loadImage("images/tree.png")

}
display(){

var posBottom=this.bottomBody.position;
push()
translate(posBottom.x, posBottom.y+10);
imageMode(CENTER)
fill (255)
image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
pop ();
}




}