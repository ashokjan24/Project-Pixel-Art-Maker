function makeGrid(event){
var ih=$('#inputHeight').val();
var iw=$('#inputWeight').val();
var paintColor=$('#colorPicker').val();

	alert(iw)
	$('table tr').remove();
  for(i=1;i<=ih;i++){
  	$('#pixelCanvas').append('<tr></tr>');
  	for(j=1;j<=iw;j++){
  		$('tr:last').append('<td class="cell"></td>');
  	}
  }
  event.preventDefault();
  $('.cell').click(function fillColor(event){
    $(event.target).css("background-color",paintColor);
  })

}


$('#submitButton').click(makeGrid(event));

