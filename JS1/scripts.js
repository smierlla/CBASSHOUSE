$(document).ready(function() {
	alert("document object model is ready");
	$('h1').click(function(){
		 var color=$(this).attr( 'style' ); // read this attribute
		 alert(color);
		 $(this).attr ('style',' color:red' ); // set the attribute property
		 $(this).attr ('class',' clicked' ); // set the attribute property
		 
		 
	})
})