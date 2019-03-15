function Line(x1,y1,x2,y2){
  this.type = "line";
  this.hash = hasnumber;
  hasnumber += 1;
  this.l1 = new vector(x1,y1);
  this.l2 = new vector(x2,y2);

  this.show = function(){
    line(this.l1.x,this.l1.y,this.l2.x,this.l2.y);
  }
}
