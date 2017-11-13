
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
'    <td></td>'+
'    <td></td>'+
'    <td></td>'+
'  </tr>'+
'  <tr>'+
'    <td>Eve</td>'+
'    <td>Jackson</td>'+
'    <td>94</td>'+
'    <td></td>'+
'    <td></td>'+
'    <td></td>'+
'  </tr>'+
'</table>';
  

}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      parseRequest(this.responseText);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=29e67ba9c14f9f26ee408b825f02a00c", true);
  xhttp.send();
  document.getElementById("demo").innerHTML = this.responseText;

}

function parseRequest(request){
  var parsedText = JSON.parse(request);
  document.getElementById("demo").innerHTML = parsedText.main.temp;
}
