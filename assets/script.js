var value = 1, colorValue = '#000000';
$(document).ready(function(){
$('#grid_container').html("");

$('#load_grid').on('click', function(){
	
	$('.grid_square').remove();
	$('.grid_border').remove()
	repeat_access();

	});


$('#clear_field').on('click', function(){

	$('.grid_square').remove();
	$('.grid_border').remove();
	
	});

$('#black_trail').on('click', function(){

	value = 1;

	Trail_Value(value);
	});
$('#select_trail').on('click', function(){

	value = 2;

	Trail_Value(value);

	});
$('#opacity_change').on('click', function(){

	value = 3;

	Trail_Value(value);
	});
	
$('#random_trail').on('click', function(){

	value = 4;

	Trail_Value(value);
	});

});
	
	//Gathers value for grid
	function repeat_access(){
	var input = prompt('Type an integer between 1 and 128');
	create_grid(input);
	
	}

	//Creates grid within 960px screen
	function create_grid(input){
		if ((input >= 1) && (input <= 128))
		{
			box_size = $('#grid_container').width()/input - 2;
			for (i= 0; i <=input; i++){
				for(j = 0; j <= input; j++){
					$('#grid_container').append('<div class="grid_border"><div class="grid_square"></div></div>');
					}
				}
			$('.grid_border').css('height', box_size);
			$('.grid_border').css('width', box_size);
			$('.grid_square').css('height', box_size);
			$('.grid_square').css('width', box_size);

		}
		else
		{
			alert("Invalid input");
		}
		Hover_Grid();
	
	}
	//Determines Trail Type
	function Trail_Value(value){
		switch(value){
		case 1:
		colorValue = '#000000';
		Hover_Grid();
		break;
		case 2:
		colorValue = Select_Hex();
		break;
		case 3:
		GridOpacityChange();
		break;
		default:
		break;
		}

	}

	//Select Own Hex Code
	function Select_Hex(){
		var hexValue, hexValidator;
		do{
		hexValue = prompt("Please Enter A Hex Value");
		hexValidator = /^#[0-9A-F]{6}$/i.test(hexValue);
		if (hexValidator == true)
			return hexValue;

		else
			alert("Try again!");

		}
		while(hexValue == false);

	}

	function Hover_Grid(){
		$('.grid_square').unbind();
		$('.grid_square').hover( function(){

		if (value == 4){
			
			$('.grid_square').css("opacity", 1);	
			$(this).css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
		}
		else if (( value == 1 || value == 2)){
			//$(this).css("opacity", 1);

			$('.grid_square').css("background-color", "white");
			$('.grid_square').css("opacity", 1);	
			$(this).css('background-color', colorValue);
		}
		else{

		$(this).css('background-color', colorValue);

		}
	});

	}
	function GridOpacityChange(){
	
		$('.grid_square').css("background-color", "white");
		$('.grid_square').css("opacity", 1);	
			$('.grid_square').hover( function(){
			var gridOpacity = $(this).css("opacity");

			if (gridOpacity > 0.1) {
				$(this).css("opacity", gridOpacity - 0.1);
				
			}
			else {
				$(this).css("opacity", 0);

			}
		});
	
	}