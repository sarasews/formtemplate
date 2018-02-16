
$(function() {    //$(function(){ is same as $(document).ready(function() 
    
	$('img').fadeOut(5000).fadeIn(5000).fadeToggle(5000);  
	
  $('h1').css(
    {
      color: 'red', 
      'font-weight': 'extra-bold'   //need quotes around 'font-weight' because of the hyphen (jquery will think minus)
    }
  );
  
$('img').on('mouseover', function(){
   $('img').attr("src", "images/bubbles2.jpg");
});

$('img').on('mouseout', function(){
   $('img').attr("src", "images/bubbles1.jpg");
});
  
  var text1 = "Using jQuery";
  var text2 = "This is an h1 heading";
  $('h1').on('click', function(){
	 $(this).toggleClass("jquery");
	 if ($(this).attr("class") !== "jquery") {
		$(this).text(text1);
	 }
	 else {
		 $(this).text(text2);
	 }
  
	 
  });
  
  
  
                  
}); // end ready

