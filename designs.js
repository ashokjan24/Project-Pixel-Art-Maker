
$('#submitButton').click(function makeGrid(event){
$('table tr').remove();
const gridHeight=$('#inputHeight').val();
const gridWidth=$('#inputWeight').val();
const canvasTable=$('#pixelCanvas');

	for(i=1;i<=gridHeight;i++){
		canvasTable.append('<tr></tr>');
		for(j=1;j<=gridWidth;j++){
			$('tr:last').append('<td class="cell"></td>');
		}
	}
	event.preventDefault();

	$('.cell').click(function(event){
	    const paintColor=$('#colorPicker').val();
	    $(event.target).css("background-color",paintColor);
    });
});

