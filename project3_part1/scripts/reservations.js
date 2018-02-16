"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var reservations = function() {
	var isValid = true; 
    var arrival_date = $("arrival_date").value;
    var nights_staying = $("nights_staying").value;
    var customer_name = $("customer_name").value;
	var customer_email = $("customer_email").value;
	var phone_number = $("phone_number").value;
	var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	var validEmail = emailPattern.test(customer_email);
	var phonePattern = /^\d{3}[-]\d{3}[-]\d{4}$/;
	var validPhone = phonePattern.test(phone_number);

    // validate the entries
    if (arrival_date == "") {
    	$("arrival_date").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
    else {
      $("arrival_date").nextElementSibling.firstChild.nodeValue = "";	
    }
	
    if (nights_staying == "") {
    	$("nights_staying").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
	else if (nights_staying < 1 || nights_staying > 10 || isNaN(nights_staying)) {
	  $("nights_staying").nextElementSibling.firstChild.nodeValue = "Please enter a value between 1 and 10.";
		  isValid = false;
    }
	else {
    	$("nights_staying").nextElementSibling.firstChild.nodeValue = "";	
    }
    
	if (customer_name == "") {
    	$("customer_name").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
    else {
      $("customer_name").nextElementSibling.firstChild.nodeValue = "";	
    }
	
	if (customer_email == "") {
    	$("customer_email").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
	else if (validEmail == false) {
    	$("customer_email").nextElementSibling.firstChild.nodeValue = "Please enter a valid email address.";
		  isValid = false;
    }
    else {
      $("customer_email").nextElementSibling.firstChild.nodeValue = "";	
    }

	if (phone_number == "") {
    	$("phone_number").nextElementSibling.firstChild.nodeValue = "This field is required.";
		  isValid = false;
    }
	else if (validPhone == false) {
    	$("phone_number").nextElementSibling.firstChild.nodeValue = "Please enter a valid phone number.";
		  isValid = false;
    }
    else {
      $("phone_number").nextElementSibling.firstChild.nodeValue = "";	
    }
	
    // submit the form if all entries are valid
    // otherwise, display an error message
    if (isValid == true) {
      $("reservation_form").submit();
    }
};

window.onload = function() {
    $("submit_button").onclick = reservations;
    $("arrival_date").focus();
};
