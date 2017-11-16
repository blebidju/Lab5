
var TableString = '<table style="width:100%">'+
'  <tr>'+
'    <th>City Name</th>'+
'    <th>Timestamp<br/>(yyyy:mm:dd:hh:mm:ss)</th> '+
'    <th>Temperature<br/>in \u00B0C</th>'+
'    <th>Humidity <br/>in %</th>'+
'    <th>Wind Speed<br/>in miles per hour</th> '+
'    <th>Cloudiness<br/>in %</th>'+
'  </tr>';

var FirstCityInfo = "";

var SecondCityInfo = "";

var ThirdCityInfo = "";

function grabInfo(){
  //london city id
  loadDoc("2643743");
  //tokyo city id
  loadDoc("1850147");
}


function loadDoc(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      interpretRequest(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id="+id+"&APPID=29e67ba9c14f9f26ee408b825f02a00c", true);
  xhttp.send();
  
}


function interpretRequest(request){
  if(request.name == "London"){
    FirstCityInfo = request;
  }
  else if(request.name == "Tokyo"){
    SecondCityInfo = request;
  }
  else{
    document.getElementById("demo").innerHTML = "3";
  }

  if(FirstCityInfo != "" && SecondCityInfo != ""){
    document.getElementById("Table").innerHTML = TableString +
    '  <tr>'+
    '    <td>'+FirstCityInfo.name+'</td>'+
    '    <td>'+convertTime(FirstCityInfo.dt)+'</td>'+
    '    <td>'+(FirstCityInfo.main.temp-273.15)+'</td>'+
    '    <td>'+FirstCityInfo.name+'</td>'+
    '    <td>'+FirstCityInfo.name+'</td>'+
    '  </tr>'+
    '  <tr>'+
    '    <td>'+SecondCityInfo.name+'</td>'+
    '    <td>'+SecondCityInfo.name+'</td>'+
    '    <td>'+(SecondCityInfo.main.temp-273.15)+'</td>'+
    '    <td>'+SecondCityInfo.name+'</td>'+
    '    <td>'+SecondCityInfo.name+'</td>'+
    '    <td>'+SecondCityInfo.name+'</td>'+
    '  </tr>'+
    '</table>';
  }
  
}

function convertTime(time){


return "d";
}