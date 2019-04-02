var w = window.innerWidth - 40;
var h = window.innerHeight - 40;

var g = 0.3;
var elements = [];
var hasnumber = 0;
var bounce = 0.25;
var friction = 0.98;
var air_friction = 0.995;
var ballballbounce = 0.2;

function setup() {
	mouse_pressed_before = false;
	createCanvas(w, h);
}

function draw()	{
	background(51);
	stroke(230);
	mouse();
	for (let i = 0; i < elements.length; i++) {
		if(elements[i].type == "ball"){
			elements[i].show();
			elements[i].update(new vector(0,g));
		}
		else{
			elements[i].show();
		}
	}
}


function round2(n,p){
	return round(n*pow(10,p))/pow(10,p);
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

function distance_point_point(x1,y1,x2,y2){
	return sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

function distance_vec_vec(v1,v2){
	let x1 = v1.x;
	let x2 = v2.x;
	let y1 = v1.y;
	let y2 = v2.y;
	return sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
