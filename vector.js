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
  this.setMag = function(new_mag){
      let mag = sqrt(this.x*this.x+this.y*this.y);
      this.x = this.x * new_mag / mag;
      this.y = this.y * new_mag / mag;
  }
}
