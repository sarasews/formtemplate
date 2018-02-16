$(document).ready(function() {
    $("#btn").click(function() {
      
      //get the data and process it
      $.getJSON("http://www.vstarkey.net/ajax_files/pets.json", function(myData) {
        
      //display each item of the data
        $.each(myData, function() {         
          $("#info").append("<p>" + this.name + " is a " + this.species + ".</p>");          
        }); //each function         
        
      });  //get function 
		
  }); //click function

}); //ready



