class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility= 255;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<2.5){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      tint(255, this.visibility);
      this.visibility= this.visibility-5;
      image(this.image, this.body.position.x, this.body.position.y, 50,50);
      pop();
    }
   

    // tint(255,255); full view, no transpenracy  255-255 = 0 => 0% transparency
    //tint(255, 128); 255-128 = 127 => 50% transparency
    //tint(255,1); 99.9 % tranpaney
    // 100% tranapency
  }

};