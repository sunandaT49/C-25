class Base {
    constructor(x, y,w,h) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      this.image=loadImage("sprites/base.png")
      World.add(world, this.body);
     
    };
    display(){
     // var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      //       img var  x  y   w        h
      image(this.image,0,0,this.width,this.height)
      //rect(0, 0, this.width, this.height);
      pop();
    };
  };
  