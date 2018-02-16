"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
	var isValid = true;
	
	// get values for user entries   
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;    
    
    //get user contact preferences
    var contact = "Text";   //default contact method
    if ($("email").checked) { 
      contact = "Email"; 
    }
    if ($("none").checked) { 
      contact = "None"; 
    } 

    //get value of terms of service checkbox (checked property stored as true/false)
    var terms = $("terms").checked;

    // check user entries for validity
    //should also be checking for valid content, but purpose of this exercise is just
    //to show how to add content to an html element
    if (email == "") {
      $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
    else {
      $("email_address").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (phone == "") {
      $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
      isValid = false;
    }
    else {
      $("phone").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (country == "") {
      $("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
      isValid = false;
    }
    else {
      $("country").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (terms == false) {
          $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
      isValid = false;
    }
    else {
      $("terms").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (isValid == true) {
      $("registration_form").submit();
    }
};


var resetForm = function() {
    $("registration_form").reset();
	$("email_address").nextElementSibling.firstChild.nodeValue = "*";
	$("phone").nextElementSibling.firstChild.nodeValue = "*";	
	$("country").nextElementSibling.firstChild.nodeValue = "*";	
	$("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};