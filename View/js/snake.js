$(document).ready(function(){

var snakeCanvas = $("#snakeCanvas")[0];
var ctx = snakeCanvas.getContext("2d");
var width = $("#snakeCanvas").width();
var height = $("#snakeCanvas").height();
var unit = 10; 					// the unit size of snake and food
var direction = "Right"; 		// default direction is towards right
var initialsnake ={
		x:Math.round(Math.random()*(width-unit)/unit),
		y:Math.round(Math.random()*(height-unit)/unit)
		};  					// randomly pick initial location of snake
var snake = [initialsnake];    	// the entire entity of snake
var food;
setFood();						// set ihe first food
var score = 0					// score start from 0
//draw food 
draw(food.x,food.y,"blue"); 	//draw food square
draw(snake[0].x, snake[0].y, "red"); //draw snake square
var growth = false;  			//token that determines snake growth or not
	
	// generate food at random location
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
	// draw one square with given x, y coordinate and color
	function draw(x, y, color){
		ctx.fillStyle=color;
		ctx.fillRect(x*unit,y*unit,unit,unit);
	}

	var gameProcess = setInterval(autoMove, 300); // set autoMove once by 0.3 second (300 miliseconds)
	// snake movements according the current direction
	function autoMove(){
		switch(direction){
			// switch case, snake moves according to the direction
			case "Left":
				bodyMove();
				snake[0].x--;
				break;
			case "Up":
				bodyMove();
				snake[0].y--;
				break;
			case "Right":
				bodyMove();
				snake[0].x++;
				break;
			case "Down":
				bodyMove();
				snake[0].y++;
				break;
		}
		// if eat a food
		if(food.x == snake[0].x && food.y == snake[0].y){
			score++;
			$("#score").text(score);
			growth=true;
			setFood(); // set new food
		}
		checkCollision();	// check if collide with it's body
		checkWall();		// check if arrive the wall
		emptySpace();		// empty all space in order to redraw everything 
		for (s in snake){
			draw(snake[s].x, snake[s].y, "red");  // draw snake
		}	
		draw(food.x,food.y,"blue");				  // draw food
	}

	// function control snake's body movement
	function bodyMove(){
		if (growth){ // if snake is growing, add a piece of body
			snake.push({x:snake[snake.length-1].x,y:snake[snake.length-1].y});
			growth=false;
		}
		for (i=snake.length-1;i>0;i--){
			snake[i].x=snake[i-1].x;
			snake[i].y=snake[i-1].y;
		}// snake body move one step forward

	}

	// check collision if the snake eat itself
	function checkCollision(){
		head = snake.shift();	// remove head from the array
		for (each in snake){	// each part of snake body execpt head
			if (head.x == snake[each].x && head.y == snake[each].y){ 	// if snake head has same loaction with any part of its body
				$("#over").text("Game Over !");	 //game over
				clearInterval(gameProcess);		// turn off the movements
			}
		}
		snake.unshift(head);	// add the head back to array
	}

	// check if snake hit the wall, when snake across the wall, it will shou up in opposite side wall with same move direction
	function checkWall(){
		if (snake[0].x < 0){ // hit left wall
			snake[0].x = (width-unit)/unit; //show up in right
		}else if(snake[0].x > (width-unit)/unit){	// hit the right wall
			snake[0].x =0;	// show up in left wall
		}
		if (snake[0].y < 0){ //hit the top wall
			snake[0].y = (height-unit)/unit;	//show up in bottom wall
		}else if(snake[0].y > (height-unit)/unit){	// hit the bottom wall
			snake[0].y =0;	//show up in top wall
		}
	}

	// function interact with keyboard left, up, right, down
	$(document).keydown(function(event){
		var key = event.which;
		// keyCode 37 - Left, 38 - Up, 39 - Right, 40 - Down
		if (key == 37){
			direction="Left";
		}
		if (key == 38){
			direction="Up";
		}
		if (key == 39){
			direction="Right"; 
		}
		if (key == 40){
			direction="Down";
		}
	});

	// when start button is clicked
	$("#start").on('click', function(){
		restart();	// game restart
	});

	function restart(){
		emptySpace(); 	//empty the board
		score = 0;		// clear the score
		$("#score").text(score);
		setFood();		// reset food
		initialsnake ={
			x:Math.round(Math.random()*(width-unit)/unit),
			y:Math.round(Math.random()*(height-unit)/unit)
		};  					
		snake = [initialsnake]; 		//reset snake
		draw(food.x,food.y,"blue"); 	//draw food square
		draw(snake[0].x, snake[0].y, "red"); //draw snake square
		growth = false;  				// reset the growth token
	}
});