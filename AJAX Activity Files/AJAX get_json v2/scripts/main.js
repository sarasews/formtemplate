$(document).ready(function() {  
  
    $("#btn").click(function() {
      
      //get the data and process it
      $.getJSON("http://www.vstarkey.net/ajax_files/pets.json", function(myData) {
                
      //display each item of the data
      $.each(myData, function() {         
        
        $.each(this, function(key, value){
            $("#info").append("<p>" + key + ": " + value + ".</p>");
        });
          
      }); //outer each function
        
    });  //get function 
		
  }); //click function

}); //ready



