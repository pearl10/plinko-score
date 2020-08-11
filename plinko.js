class Plinko{
    constructor(x,y,r) {
        var options = {
         isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r=10;
      World.add(world, this.body);
    }
    display(){
   
        var pos=this.body.position;
       // var angle=this.body.angle;

                                                                                                                                                                                                            
    push();
   // traslate(pos.x,pos.y)
    // rotate(angle)                                                                                                                                                                                                              
      noStroke();
       fill("yellow") 
      ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r)
     pop();
    }
}
