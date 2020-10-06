class Paper{

    constructor(x,y){
  var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
  }
  this.body = Bodies.circle(x,y,70,options);
  World.add(world,this.body);
}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
   ellipse(0,0,70);
   this.image = image("paper.png",20,70);
    pop();
}
}