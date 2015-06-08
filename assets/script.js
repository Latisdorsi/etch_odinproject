$(document).ready(function(){
$('#grid_container').html("");
var randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
var input = prompt('Type an integer between 1 and 128');
create_grid(input);
	$('.grid_square').hover(function(){

			$( this ).css('background-color', randomHex);
		});

$('#clear_field').on('click', function(){
for ( i = 0; i <= input ; i++){
			for(j = 0; j <= input; j++){
				$('.grid_square').remove();
			}
				$('#New_Row').remove();
		}
	var input = prompt('Type an integer between 1 and 128');
	create_grid(input);

});



});
	function create_grid(input){
	if ((input >= 1) && (input <= 128))
	{
		box_size = $('#grid_container').width()/input - 2;
		for ( i = 0; i <= input ; i++){
			for(j = 0; j <= input; j++){
				$('#grid_container').append('<div class="grid_square"></div>');

			}
				$('#grid_container').append('<div class="New_Row"> </div>');
		}

		$('.grid_square').css('height', box_size);
		$('.grid_square').css('width', box_size);

	}
	else
	{
		alert("Invalid input");
	}

}