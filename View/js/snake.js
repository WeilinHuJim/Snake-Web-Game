$(document).ready(function(){

var snakeCanvas = $("#snakeCanvas")[0];
var ctx = snakeCanvas.getContext("2d");
var width = $("#snakeCanvas").width();
var height = $("#snakeCanvas").height();
var unit = 10; 					// the unit size of snake and food
var direction = "Right"; 		// default direction is towards right
var initialsnake ={
		x:Math.round(Math.random()*2*(width-unit)/unit/3),
		y:Math.round(Math.random()*(height-unit)/unit)
		};  					// randomly pick initial location of snake,since default direction is right, the random value of x coordinate is 2/3 of the total width
var snake = [initialsnake];    	// the entire entity of snake
var food;
setFood();
var score = 0					// score start from 0
//draw food 
draw(food.x,food.y,"blue"); 	//draw food square
draw(snake[0].x, snake[0].y, "red"); //draw snake square
var growth = false;  			//token that determines snake growth or not
	function setFood(){
		food = {
			x:Math.round(Math.random()*(width-unit)/unit),
			y:Math.round(Math.random()*(height-unit)/unit)
		};
	}

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
		if (growth){
			snake.push({x:snake[snake.length-1].x,y:snake[snake.length-1].y});
			growth=false;
		}
		for (i=snake.length-1;i>0;i--){
			snake[i].x=snake[i-1].x;
			snake[i].y=snake[i-1].y;
		}
	}

	function checkCollision(){
		head = snake.shift();
		for (each in snake){
			if (head.x == snake[each].x && head.y == snake[each].y){
				$("#over").text("Game Over !");
			}
		}
		snake.unshift(head);
	}

	function checkWall(){
		if (snake[0].x < 0){
			snake[0].x = (width-unit)/unit;
		}else if(snake[0].x > (width-unit)/unit){
			snake[0].x =0;
		}
		if (snake[0].y < 0){
			snake[0].y = (height-unit)/unit;
		}else if(snake[0].y > (height-unit)/unit){
			snake[0].y =0;
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
			growth=true;
			//snake.push({x:food.x,y:food.y});
		}
		checkCollision();
		checkWall();
		emptySpace();
		var test ="x and y: ";
		for (s in snake){
			draw(snake[s].x, snake[s].y, "red"); //draw snake square
			test= test +s+" " +snake[s].x +" "+ snake[s].y +" ";
		}	
		$("#test").text(test);	
		draw(food.x,food.y,"blue");
	});

});