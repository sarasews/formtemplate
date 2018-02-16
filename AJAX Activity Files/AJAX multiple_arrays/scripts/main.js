$(document).ready(function() {
    $("#btn").click(function() {
      
      //get the data and process it
      $.getJSON("http://www.vstarkey.net/ajax_files/family.json", function(myData) {
         
        //process each category
        $.each(myData, function() {  
		
			// to make headings?  $("info").append("<h2>" + key + "</h2>");
               
          //process each object in the current category
          $.each(this, function() {
          
            //display each key-value pair
            $("#info").append("<p>");
            $.each(this, function(key, value){
                $("#info").append(key + ": " + value + "\xa0\xa0\xa0\xa0\xa0");
            });
            $("#info").append("</p>");
          
        });//middle each function
          
      }); //outer each function
        
    });  //get function 
		
  }); //click function

}); //ready



