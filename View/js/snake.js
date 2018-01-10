$(document).ready(function(){


	// function interact with keyboard left, up, right, down
	$(document).keydown(function(event){
		var key = event.which;
		// keyCode 37 - Left, 38 - Up, 39 - Right, 40 - Down
		if (key == 37){
			$("div").animate({left: '50px'});
		}
		if (key == 38){
			$("div").animate({top: '50px'});
		}
		if (key == 39){
			$("div").animate({left: '100px'});
		}
		if (key == 40){
			$("div").animate({top: '100px'});
		}

	});

});