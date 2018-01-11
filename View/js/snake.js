$(document).ready(function(){

var snakeCanvas = $("#snakeCanvas")[0];
var ctx = snakeCanvas.getContext("2d");
var unit = 10; // the unit size of snake and food
var snake ={x:10,y:10};
	
	// empty the space, clear the trace of the snake
	function emptySpace(){
		ctx.fillStyle="white";
		ctx.fillRect(0,0,400,400);
	}

	function draw(x, y, color){
		ctx.fillStyle=color;
		ctx.fillRect(x*unit,y*unit,unit,unit);
	}

ctx.fillStyle = "#FF0000";
ctx.fillRect(snake.x*unit,snake.y*unit,unit,unit);
	// function interact with keyboard left, up, right, down
	$(document).keydown(function(event){
		var key = event.which;
		// keyCode 37 - Left, 38 - Up, 39 - Right, 40 - Down
		if (key == 37){
			snake.x--;
		}
		if (key == 38){
			snake.y--;
		}
		if (key == 39){
			snake.x++; 
		}
		if (key == 40){
			snake.y++;
		}

		emptySpace();
		draw(snake.x,snake.y,"red");
		//ctx.fillStyle = "#FF0000";
		//ctx.fillRect(snake.x*unit,snake.y*unit,unit,unit);
	});

});