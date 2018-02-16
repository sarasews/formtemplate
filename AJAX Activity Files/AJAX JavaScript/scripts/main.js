
var getData = function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://www.vstarkey.net/ajax_files/pets.json');

  //display results once request is done
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    var strResults = ""; 

    for (i = 0; i<myData.length; i++) {  
      strResults += "<p>" + myData[i].name + " is a " + myData[i].species + ".</p>";
    }  
    document.getElementById("info").innerHTML = strResults;
  
  };

  myRequest.send();
  
};


window.onload = function() {
  document.getElementById("btn").onclick = getData;
};


