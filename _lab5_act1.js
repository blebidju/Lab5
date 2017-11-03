
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else {
    return(null);
  }
}

// Make an HTTP request to the given address. 
// Display result in an alert box.

function ajaxAlert(address) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showResponseAlert(request); }
  request.open("GET", "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=29e67ba9c14f9f26ee408b825f02a00c", true);
  request.send(null);
}


function test(){
	$.ajax({ url:"api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=29e67ba9c14f9f26ee408b825f02a00c"
 }).done(function(data){console.log(data);})

}

function createTable(){
	document.getElementById("Table").innerHTML =  '<table style="width:100%">'+
'  <tr>'+
'    <th>City Name</th>'+
'    <th>Timestamp<br/>(yyyy:mm:dd:hh:mm:ss)</th> '+
'    <th>Temperature<br/>in \u00B0C</th>'+
'    <th>Humidity <br/>in %</th>'+
'    <th>Wind Speed<br/>in miles per hour</th> '+
'    <th>Cloudiness<br/>in %</th>'+
'  </tr>'+
'  <tr>'+
'    <td>Tokyo,JP</td>'+
'    <td>Smith</td>'+
'    <td>50</td>'+
'  </tr>'+
'  <tr>'+
'    <td>Eve</td>'+
'    <td>Jackson</td>'+
'    <td>94</td>'+
'  </tr>'+
'</table>';
	
;
}

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});

test();
