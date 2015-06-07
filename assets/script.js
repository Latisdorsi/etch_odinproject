$(document).ready(function(){
$('#grid_container').html("");
var input = prompt('Type an integer between 1 and 128');
var hoverColor = "#FFFFFF"
	if ((input >= 1) && (input <= 128))
	{
		box_size = $('#grid_container').width()/input - 2;
		for ( i = 0; i <= input ; i++){
			for(j = 0; j <= input; j++){
				$('#grid_container').append('<div class="grid_square"></div>');
				console.log("test")
			}
				$('#grid_container').append('<div class="New Row> </div>')
		}

		$('.grid_square').css('height', box_size);
		$('.grid_square').css('width', box_size);
		
		$('.grid_square').hover(function(){

			$( this ).css('background-color', "#cccccc");
		});

	}
	else
	{
		alert("Invalid input");
	}
});