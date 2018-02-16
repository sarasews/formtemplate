"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(initAmt, rate, years) {
	var futureValue = initAmt;
	
	for (var i=0; i<years; i++) {
		futureValue = futureValue + (futureValue * rate / 100);
	};
	
	futureValue = futureValue.toFixed(3);
	return futureValue;
};
	
var process = function() {
	var initAmt = parseFloat($("investment").value);
	var rate = parseFloat($("rate").value);
	var years = parseFloat($("years").value);
	
	
	if (isNaN(initAmt) || isNaN(rate) || isNaN(years)) {
		alert("All entries must be numeric!");
	} else if (initAmt <= 0 || rate <= 0 || years <=0) {
		alert("All entries must be greater than zero!");
	} else {
		$("future_value").value = calculateFV(initAmt, rate, years);
	};
};

window.onload = function() {
	$("calculate").onclick = process;
};