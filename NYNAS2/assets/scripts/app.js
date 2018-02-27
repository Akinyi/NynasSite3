'use strict';

const key = '0a28b7c6465a9c158cb3c2ddd2670eac';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=nynashamn&APPID=' + key;
var weatherBody = document.getElementById("weather");
var trainBody = document.getElementById("train");

function HTTPGet(url){
    this.url = url;
    this.ajax = new XMLHttpRequest();
}

HTTPGet.prototype.proceed = function(callback){
    this.ajax.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    }
    this.ajax.open('GET', this.url, true);
    this.ajax.send();
}

function fetch(url){
    return new HTTPGet(url);
}

/*

fetch(API_URL).proceed(response =>{  
  
    var weatherData = JSON.parse(response);

    var weatherList = weatherData.list;

    for(var index = 0; index < 5; index++){
        var time = weatherList[index].dt_txt;
        var date = new Date(time);
        var hour = date.getHours() + ":00";
        var speed = weatherList[index].wind.speed.toFixed(1) + "m/s";
        var temp = weatherList[index].main.temp - 273.15;
        var tempconverted = temp.toFixed(1) + "C";
        var direction = weatherList[index].weather[0].description;

        var timestamp = `
        <tr> 
          <td>${hour}</td>
          <td>${direction}</td> 
          <td>${tempconverted}</td>
          <td>${speed}</td>
        </tr>
        `;
        weatherBody.innerHTML += timestamp;
    }

}); */

var traindata = {
    nr: [42,42,42],
    avgår: ['10:25','12:25','14:25'],
    ankomst: ['11:23','13:23','15:23']

}
 document.getElementById("trainbutton").addEventListener("click", function(){
     var fromCaption = document.getElementById("from");
     var fromInput = document.getElementById("trainFrom");
     fromCaption.innerHTML = "Åker från " + fromInput.value;

     var trainBody = document.getElementById("train");

     if (trainBody.childElementCount !=0) {
        trainBody.innerHTML = "";
     }
     for (let index = 0; index <3; index ++){
         var row = trainBody.insertRow(index);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         cell1.innerHTML = traindata.nr[index];
         cell2.innerHTML = traindata.avgår[index];
         cell3.innerHTML = traindata.ankomst[index];
     }
     
     
 function fetch(url){
        return new HTTPGet(url);
    }
    
    
    fetch(API_URL).proceed(response =>{  
      
        var weatherData = JSON.parse(response);
    
        var weatherList = weatherData.list;
            
        for(var index = 0; index < 5; index++){
            var time = weatherList[index].dt_txt;
            var date = new Date(time);
            var hour = date.getHours() + ":00";
            var speed = weatherList[index].wind.speed.toFixed(1) + "m/s";
            var temp = weatherList[index].main.temp - 273.15;
            var tempconverted = temp.toFixed(1) + "C";
            var direction = weatherList[index].weather[0].description;
    
            var timestamp = `
            <tr> 
              <td>${hour}</td>
              <td>${direction}</td> 
              <td>${tempconverted}</td>
              <td>${speed}</td>
            </tr>
            `;
            weatherBody.innerHTML += timestamp;
        }
    
    });

 });
