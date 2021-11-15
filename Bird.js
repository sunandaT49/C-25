class Bird extends Base    //child of base class
{
    constructor(x, y) {
     super(x,y,50,50);      //call base class constructor
     this.image=loadImage("sprites/bird.png");
    }
    display()
    {
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
  
  }
    