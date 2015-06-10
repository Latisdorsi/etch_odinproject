var value = 1, colorValue = '#ffffff';

$(document).ready(function(){
$('#grid_container').html("");

repeat_access();

$('#clear_field').on('click', function(){

	$('.grid_square').remove();
	repeat_access();
	
	});

$('#black_trail').on('click', function(){

	value = 1;
	Trail_Value(value);
	});
$('#select_trail').on('click', function(){

	value = 2;
	Trail_Value(value);

	});
$('#random_trail').on('click', function(){

	value = 3;
	Trail_Value(value);
	});
	
$('.grid_square').hover( function(){
		$(this).css('background-color', colorValue);
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
					$('#grid_container').append('<div class="grid_square"></div>');
					}
				}
			$('.grid_square').css('height', box_size);
			$('.grid_square').css('width', box_size);

		}
		else
		{
			alert("Invalid input");
		}
	$('.grid_square').hover( function(){
		$(this).css('background-color', colorValue);
		});

	}
	//Determines Trail Type
	function Trail_Value(value){
		switch(value){
		case 1:
		colorValue = '#ffffff';
		break;
		case 2:
		colorValue = Select_Hex();
		break;
		case 3:
		colorValue =  '#'+(Math.random()*0xFFFFFF<<0).toString(16);
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