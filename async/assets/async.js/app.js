'use strict';

const key = '0a28b7c6465a9c158cb3c2ddd2670eac';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=nynashamn&APPID=' + key;

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
fetch(API_URL).proceed(response => {console.log(response);
    var weatherData = JSON.parse(response);
    var time = weatherData.list[0].dt_txt;
    var hour = new Date(time).getHours();
    console.log(hour + ":00");
});*/

function $(selector){
    return document.querySelector(selector);
}

function DOMElement(selector){
    this.element = $(selector);
    
}

DOMElement.prototype.select = function(target){
    this.selected = $(target);
    return this;
}

DOMElement.prototype.click = function(callback){
    this.element.addEventListener('click', event => {
        event.selected = this.selected;
        callback(event);
    });
}

function find(selector){
    return new DOMElement(selector);
}

find('.fetch-data').select('.weather-data').click(event => {
    console.log('clicked');
    fetch(API_URL).proceed(response =>{  
        //event.selected.innerHTML = response;
        //event.preventDefault(); // om knappen är en formulär vill du undvika att sidan laddas om
       // baklänges blir JSON.stringify(weatherData)
        var weatherData = JSON.parse(response);

        var weatherList = weatherData.list;

        // foreach skriver ut alla element, vi vill endast skriva ut 5 stycken
        /* 
        weatherList.forEach(data => {
            console.log(data);
        });*/
        var tbody = event.selected;
        for(var index = 0; index < 5; index++){
            var time = weatherList[index].dt_txt;
            var date = new Date(time);
            var hour = date.getHours() + ":00";
            var speed = weatherList[index].wind.speed.toFixed(1) + " m/s";
            var temp = weatherList[index].main.temp - 273.15;
            var tempconverted = temp.toFixed(1) + <sup>0</sup> + "C";
            var direction = weatherList[index].weather[0].description;
            var timestamp = `
            <tr> 
              <td>${hour}</td>
              <td>${speed}</td> 
              <td>${tempconverted}</td>
              <td>${direction}</td>
            </tr>
            `;
            tbody.innerHTML += timestamp;
        }
    });
});

function generateTableData(tbody, data){
    var timestamp = `
    <tr> 
      <td>${data.hour}</td>
      <td>${data.speed}</td> 
      <td>${data.tempconverted}</td>
      <td>${data.direction}</td>
    </tr>
    `;
}




