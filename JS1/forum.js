$( "#birthday").datepicker();
	
    var availableTags = [
      "Male",
      "Female"
    ];
$( "#tags" ).autocomplete({
      source: availableTags
    });