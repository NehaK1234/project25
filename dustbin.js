class dustbin {
    constructor(x, y, w, h) {

        var options={
         isStatic:true
        };

      this.body = Bodies.rectangle(x, y, w, h,options);
      this.w = w;
      this.h = h;
      this.image = loadImage("dustbin.png");
  
      World.add(world, this.body);
    }
  
   
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  