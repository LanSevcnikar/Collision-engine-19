var mouse_pressed_before;
var mouse_type;
var mouse_x_1 = 0;
var mouse_y_1 = 0;
var mouse_x_2 = 0;
var mouse_y_2 = 0;

function mouse() {
	if (mouseIsPressed && !mouse_pressed_before){
		mouse_type = mouseButton;
		mouse_x_1 = mouseX;
		mouse_y_1 = mouseY;
		mouse_pressed_before = true;
	}else if (mouseIsPressed && mouse_pressed_before){
		mouse_x_2 = mouseX;
		mouse_y_2 = mouseY;
		line(mouse_x_1,mouse_y_1,mouse_x_2,mouse_y_2);
	}else if (!mouseIsPressed && mouse_pressed_before){
		if(mouse_type === LEFT){
			elements.push(new Line(mouse_x_1,mouse_y_1,mouse_x_2,mouse_y_2));
		}else if(mouse_type === CENTER){
			elements.push(new Ball(mouse_x_1,mouse_y_1,(mouse_x_1-mouse_x_2)*0.05,(mouse_y_1-mouse_y_2)*0.05));
		}
		mouse_pressed_before = false;
	}
}
