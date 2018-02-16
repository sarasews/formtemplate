$(document).ready(function() {

	// the handler for the click event of the submit button
	$("#fruit_form").submit( function() {
      
	  //get the value of the checked button
      var radioButtonValue = $("input[name=fruit]:checked").val();
	  
      if (radioButtonValue == null) {
		  alert("You have not made a choice");
	  } else {
		  alert("You chose " + radioButtonValue);
	  }

			
	  } // end function
	);	// end submit
}); // end ready