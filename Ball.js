function Ball(x, y, vx, vy) {
    this.type = "ball";
    this.hash = hasnumber;
    hasnumber += 1;
    this.loc = new vector(x,y);
    this.v = new vector(vx,vy);
    this.a = new vector(0,0);
    this.r = 12;

    this.show = function(){
        ellipse(this.loc.x, this.loc.y, this.r*2);
    }

    this.update = function(){
        this.a.y = g;
        this.v.add(this.a);
        this.loc.add(this.v);
        for (let i = 0; i < elements.length; i++) {
            if(elements[i].hash != this.hash){
                if(elements[i].type == "line"){
                    let maxx = max(elements[i].l1.x,elements[i].l2.x) + this.r;
                    let maxy = max(elements[i].l1.y,elements[i].l2.y) + this.r;
                    let minx = min(elements[i].l1.x,elements[i].l2.x) - this.r;
                    let miny = min(elements[i].l1.y,elements[i].l2.y) - this.r;
                    if(this.loc.x < maxx && this.loc.x > minx && this.loc.y < maxy && this.loc.y > miny){
                        let dist = distance_point_line(this.loc.x,this.loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y);
                        if (dist <= this.r) {
                            while(dist < this.r){
                                dist = distance_point_line(this.loc.x,this.loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y);
                                let pt = new vector(this.v.x,this.v.y);
                                pt.inc(-0.001);
                                this.loc.add(pt);
                            }

                            let vzporedno = new vector (-elements[i].l1.x+elements[i].l2.x, -elements[i].l1.y+elements[i].l2.y);
                            let pravokotno = new vector (elements[i].l2.y-elements[i].l1.y, elements[i].l1.x-elements[i].l2.x);

                            let x1 = this.v.x;
                            let y1 = this.v.y;
                            let x2 = elements[i].l1.x-elements[i].l2.x;
                            let y2 = elements[i].l1.y-elements[i].l2.y;

                            let mag = sqrt(x1*x1+y1*y1);
                            let magV = mag;
                            let magL = sqrt(x2*x2+y2*y2);
                            let calc = x1 * x2 + y1 * y2;
                            let alfa = PI-acos((calc)/(magL*magV));
                            console.log(degrees(alfa));

                            let vzpMag = mag;
                            let praMag = mag;
                            vzpMag *= cos(alfa);
                            praMag *= sin(alfa);
                            round2(vzpMag,6);
                            round2(praMag,6);

                            vzporedno.setMag(vzpMag);
                            pravokotno.setMag(praMag);
                            vzporedno.inc(friction);
                            pravokotno.inc(bounce);

                            let loc = new vector(this.loc.x,this.loc.y);
                            let d1 = distance_point_line(loc.x,loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y)
                            let nv = new vector(pravokotno.x+vzporedno.x,pravokotno.y+vzporedno.y);
                            nv.inc(0.01);
                            loc.add(nv);
                            let d2 = distance_point_line(loc.x,loc.y,elements[i].l1.x,elements[i].l1.y,elements[i].l2.x,elements[i].l2.y)
                            if(d1 > d2) pravokotno.inc(-1);
                            this.v.set(pravokotno.x+vzporedno.x,pravokotno.y+vzporedno.y);
                        }
                    }
                }
            }
        }
        line(this.loc.x,this.loc.y,this.loc.x+this.v.x*15,this.loc.y+this.v.y*15);
    }
}
