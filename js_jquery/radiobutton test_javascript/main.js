
var checkChoice = function() {
      
      var choices = document.getElementsByName("fruit");
	  var radioButtonValue;
	  
	  //get the value of the checked button
	  for (var i=0; i< choices.length; i++) {
		  if (choices[i].checked) {
			  radioButtonValue = choices[i].value;
		  }
	  }
	   if (radioButtonValue == null) {
		  alert("You have not made a choice");
	  } else {
		  alert("You chose " + radioButtonValue);
	  }

			
}; // end function


window.onload = function() {
    document.getElementById("submit").onclick = checkChoice;
};