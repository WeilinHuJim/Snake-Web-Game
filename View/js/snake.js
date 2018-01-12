$(document).ready(function(){

var snakeCanvas = $("#snakeCanvas")[0];
var ctx = snakeCanvas.getContext("2d");
var unit = 10; 					// the unit size of snake and food
var direction = "Right"; 		// default direction is towards right
var initialsnake ={x:10,y:10};  // initial location of snake
var snake = [initialsnake];    	// the entire entity of snake
var food = {x:20,y:20};			// initial location of food
var score = 0					// score start from 0
//draw food 
draw(food.x,food.y,"blue"); //draw food square
draw(snake[0].x, snake[0].y, "red"); //draw snake square



	// empty the space, clear the trace of the snake
	function emptySpace(){
		ctx.fillStyle="white";
		ctx.fillRect(0,0,400,400);
	}

	function draw(x, y, color){
		ctx.fillStyle=color;
		ctx.fillRect(x*unit,y*unit,unit,unit);
	}

	function bodyMove(){
		if (snake.length>1){
			for (i=snake.length-1;i>0;i--){
				snake[i].x=snake[i-1].x;
				snake[i].y=snake[i-1].y;
			}
		}
	}


	// function interact with keyboard left, up, right, down
	$(document).keydown(function(event){
		var key = event.which;
		// keyCode 37 - Left, 38 - Up, 39 - Right, 40 - Down
		if (key == 37){
			bodyMove();
			snake[0].x--;
			direction="Left";
		}
		if (key == 38){
			bodyMove();
			snake[0].y--;
			direction="Up";
		}
		if (key == 39){
			bodyMove();
			snake[0].x++;
			direction="Right"; 
		}
		if (key == 40){
			bodyMove();
			snake[0].y++;
			direction="Down";
		}

		if(food.x == snake[0].x && food.y == snake[0].y){
			score++;
			$("#score").text(score);
			snake.push({x:food.x,y:food.y});
		}
		emptySpace();
		var test ="x and y: ";
		for (s in snake){
			draw(snake[s].x, snake[s].y, "red"); //draw snake square
			test= test +s+" " +snake[s].x +" "+ snake[s].y +" ";
		}	
		$("#test").text(test);	
		draw(food.x,food.y,"blue");
		//ctx.fillStyle = "#FF0000";
		//ctx.fillRect(snake.x*unit,snake.y*unit,unit,unit);
	});

});