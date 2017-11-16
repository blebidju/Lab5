var FirstCityInfo = "";

var SecondCityInfo = "";

var ThirdCityInfo = "";

var FirstCityInfoOld = "";

var SecondCityInfoOld = "";

var ThirdCityInfoOld = "";

var refresh = 0;

function grabInfo(){
  //london city id
  loadDoc("2643743");
  //Phoenix city id
  loadDoc("4905873");
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
  else if(request.name == "Phoenix"){
    SecondCityInfo = request;
  }
  else{
    ThirdCityInfo = request;
  }

  createTable();
  
}

function createTable(){

  var ReturnTableString = "";
  if(refresh == 1){
      if(FirstCityInfo != "" && SecondCityInfo != "" && ThirdCityInfo != ""){
        document.getElementById("Table").innerHTML = allHTML("TableHeader") + allHTML("FirstCity") + allHTML("FirstCityOld") + allHTML("SecondCity") + allHTML("SecondCityOld") + allHTML("ThirdCity") + allHTML("ThirdCityOld") + '</table>';

        FirstCityInfoOld = "";
        SecondCityInfoOld = "";
        ThirdCityInfoOld = "";
        
      }
      else if(FirstCityInfo != "" && SecondCityInfo != "" && ThirdCityInfoOld == ""){
        document.getElementById("Table").innerHTML = allHTML("TableHeader") + allHTML("FirstCity") + allHTML("FirstCityOld") + allHTML("SecondCity") + allHTML("SecondCityOld") + '</table>';

        FirstCityInfoOld = "";
        SecondCityInfoOld = "";
      }
  }
  else{
      if(FirstCityInfo != "" && SecondCityInfo != "" && ThirdCityInfo != ""){
        document.getElementById("Table").innerHTML = allHTML("TableHeader") + allHTML("FirstCity") + allHTML("SecondCity") + allHTML("ThirdCity") + '</table>';
      }
      else if(FirstCityInfo != "" && SecondCityInfo != ""){
        document.getElementById("Table").innerHTML = allHTML("TableHeader") + allHTML("FirstCity") + allHTML("SecondCity") + '</table>';
      }
  }
  
}

//Converts From UNIX timestamp to the specified date format (yyyy:mm:dd:hh:mm:ss)
function convertTime(time){

var date = new Date(time*1000);
var dateString = date.getFullYear() + ":" + (date.getMonth()+1) + ":" + date.getDate() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
return dateString;
}

function createThirdCity(){
  
  loadDoc(document.getElementById("Select City").value);

}

//sets refresh to 1 so i know the user hit the button
//then I set all the current values to old ones
//then I clear the new values and use the same logic in create 
//that if all the info variables are all filled then i can create the table
function refreshPage(){
  refresh = 1;

  FirstCityInfoOld = FirstCityInfo;
  SecondCityInfoOld = SecondCityInfo;
  
  FirstCityInfo = "";
  SecondCityInfo = "";

  //london city id
  loadDoc("2643743");
  //Phoenix city id
  loadDoc("4905873");

  if(ThirdCityInfo == ""){

  }
  else{
    loadDoc(document.getElementById("Select City").value);
    ThirdCityInfoOld = ThirdCityInfo;
    ThirdCityInfo = "";
  }
  


}

//All the city HTML was super similar so i made a function to create it based on the var I need
function createCityHTML(City){
    return  '  <tr>'+
            '    <td>'+City.name +','+City.sys.country+'</td>'+
            '    <td>'+convertTime(City.dt)+'</td>'+
            '    <td>'+(City.main.temp-273.15)+'</td>'+
            '    <td>'+City.main.humidity+'</td>'+
            '    <td>'+((City.wind.speed/1609.344)*60*60)+'</td>'+
            '    <td>'+City.clouds.all+'</td>'+
            '  </tr>';
}

//javascript was doing some weird stuff regarding me creating strings so this fixed that issue but it is super weird why I have to
//access data via a function, this was a dumb way to do it anyway next time Ill do this through "real" DOM manipulation
//Also not all HTML were having issues but I through all the snippets in here anyway to maintain consistency in readability so I dont
//have HTML all over the place its centralized here instead
function allHTML(choice){
  var ReturnString = "";
    if(choice == "TableHeader"){
          ReturnString = '<table style="width:100%">'+
          '  <tr>'+
          '    <th>City Name</th>'+
          '    <th>Timestamp<br/>(yyyy:mm:dd:hh:mm:ss)</th> '+
          '    <th>Temperature<br/>in \u00B0C</th>'+
          '    <th>Humidity <br/>in %</th>'+
          '    <th>Wind Speed<br/>in miles per hour</th> '+
          '    <th>Cloudiness<br/>in %</th>'+
          '  </tr>';
    }
    else if(choice == "FirstCity"){
          ReturnString = createCityHTML(FirstCityInfo);

    }
    else if(choice == "SecondCity"){
          ReturnString = createCityHTML(SecondCityInfo);
    }
    else if(choice == "ThirdCity"){
          ReturnString = createCityHTML(ThirdCityInfo);
    }
    else if(choice == "FirstCityOld"){
          ReturnString = createCityHTML(FirstCityInfoOld);
    }
    else if(choice == "SecondCityOld"){
          ReturnString = createCityHTML(SecondCityInfoOld);
    }
    else if(choice == "ThirdCityOld"){
          ReturnString = createCityHTML(ThirdCityInfoOld);
    }
    

    return ReturnString;

}