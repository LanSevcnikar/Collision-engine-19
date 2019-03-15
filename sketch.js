var w = window.innerWidth - 40;
var h = window.innerHeight - 40;

var g = 0.3;
var elements = [];
var hasnumber = 0;

function setup() {
	createCanvas(w, h);
  elements.push(new Ball(w/2,h/2));
  elements.push(new Line(100,h-100,w-100,h-100));
}

function draw()	{
  //frameRate(12);
  //console.log(elements);
	background(51);
	stroke(230);
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].type == "ball"){
      elements[i].show();
      elements[i].update();
    }else{
      elements[i].show();
    }
  }
}

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

function vector(x, y) {
  this.x = x;
  this.y = y;

  this.set = function(x, y) {
    this.x = x;
    this.y = y;
  }
  this.add = function(v){
    this.x += v.x;
    this.y += v.y;
  }
  this.sub = function(v){
    this.x -= v.x;
    this.y -= v.y;
  }
  this.inc = function(a){
    this.x *= a;
    this.y *= a;
  }
}

function abs(n){
  if(n>=0) return n;
  else return -n;
}

function distance_point_line(x0,y0,x1,y1,x2,y2){
  let pt1 = (y2 - y1) * x0;
  let pt2 = (x2 - x1) * y0;
  let pt3 = x2 * y1;
  let pt4 = y2 * x1;
  let pt5 = (y2 - y1) * (y2 - y1);
  let pt6 = (x2 - x1) * (x2 - x1);
  let dist = (abs(pt1-pt2+pt3-pt4)/sqrt(pt5+pt6));
  return dist;
}
