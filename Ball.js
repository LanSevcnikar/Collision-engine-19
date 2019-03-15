function Ball(x, y) {
  this.type = "ball";
  this.hash = hasnumber;
  hasnumber += 1;
	this.loc = new vector(x,y);
	this.v = new vector(0,0);
  this.a = new vector(0,0);
  this.r = 12;

  this.show = function(){
    ellipse(this.loc.x, this.loc.y, this.r*2);
  }

  this.update = function(){
    //console.log(this.loc);
    this.a.y = g;
    this.v.add(this.a);
    this.loc.add(this.v);

    /*if(this.loc.y > h){
      this.loc.y = 0;
      this.v.y = 0;
    }*/

    for (let i = 0; i < elements.length; i++) {
      if(elements[i].hash != this.hash){
        if(elements[i].type == "line"){
          let dist = distance_point_line(this.loc.x,this.loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y);
          if (dist <= this.r) {
            while(dist < this.r){
              dist = distance_point_line(this.loc.x,this.loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y);
              let pt = new vector(this.v.x,this.v.y);
              pt.inc(-0.001);
              this.loc.add(pt);
            }

            let vzporedno = new vector (this.v.x, this.v.y);
            let pravokotno = new vector (this.v.x, this.v.y);



          }
        }
      }
    }
  }
}
