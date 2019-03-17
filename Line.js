function Line(x1,y1,x2,y2){
    this.type = "line";
    this.hash = hasnumber;
    hasnumber += 1;

    if(x2 < x1){
        let pt = y1;
        y1 = y2;
        y2 = pt;
    }
    if(x2 == x1){
        let pt = max(y1,y2);
        y1 = min(y1,y2);
        y2 = pt;
    }

    this.l1 = new vector(min(x1,x2),y1);
    this.l2 = new vector(max(x1,x2),y2);

    this.show = function(){
        line(this.l1.x,this.l1.y,this.l2.x,this.l2.y);
    }
}
