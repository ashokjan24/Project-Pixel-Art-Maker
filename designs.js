
//When the submit button is clicked, the makeGrid function is executed to create grids and paint the cells
$('#submitButton').click(function makeGrid(event){
//The statement below will ensure any existing table grids are cleared when Submit button is clicked
$('table tr').remove();
//Obtain the user inputs on the table height, width into defined variables. Also store the table object in a variable
const gridHeight=$('#inputHeight').val();
const gridWidth=$('#inputWeight').val();
const canvasTable=$('#pixelCanvas');
//Define a for loop to iterate creation of rows in the table
	for(i=1;i<=gridHeight;i++){
		canvasTable.append('<tr></tr>');
		//Define a nested for loop to iterate creation of columns for every row in the table
		for(j=1;j<=gridWidth;j++){
			$('tr:last').append('<td class="cell"></td>');
		}
	}
	event.preventDefault();
//When any cell in the table is clicked, the selected color is painted on it
	$('.cell').click(function(event){
		//Obtain the user selected color into a variable
	    const paintColor=$('#colorPicker').val();
	    //Identify the selected cell and change its background color using the pre-selected color
	    $(event.target).css("background-color",paintColor);
    });
});

