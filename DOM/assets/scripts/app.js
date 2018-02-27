'use strict'; /*Is stricter and gives error msgs when you make them.

/* document.body.style.backgroundColor = 'red';

 // var body = document.getElementsByTagName('body');

body.style.backgroundColor = 'red';
var body = document.querySelector('body');*/


// hämtar ut första matchningen med css selectors
/*
var profileContainer = document.querySelector('.profile-cards');

var profileCard = document.createElement('div');
var titleElement = document.createElement('h2');
var textElement = document.createElement('p');

// innerHTML skriver över all inre innehåll
titleElement.innerHTML = 'Akinyi TitleElement';
textElement.innerHTML = 'This is a text Element in inner HTML';
profileCard.appendChild(titleElement);
profileCard.appendChild(textElement);
profileContainer.appendChild(profileCard);


profileCard.style.width = '50%';
profileCard.style.padding = '10px';
profileCard.style.border = '2px solid black';
profileCard.style.borderRadius = '10px';

profileCard.className = 'profile-card';
*/

// här skapar vi en function istället
function createProfileCard( title, text){
    var profileCard = document.createElement('div');
    var titleElement = document.createElement('h2');
    var textElement = document.createElement('p');

    titleElement.innerHTML = title;
    textElement.innerHTML = text;
    profileCard.className = 'profile-card';

    profileCard.appendChild(titleElement);
    profileCard.appendChild(textElement);

    return profileCard;
}

var title = 'Akinyi Title';
var text = 'This is a text Element in inner HTML';
var profileContainer = document.querySelector('.profile-cards');

profileContainer.appendChild(createProfileCard(title, text));
profileContainer.appendChild(createProfileCard(title, text));


function ProfileCard(profile){
    this.title = profile.title;
    this.text = profile.text;

    this.getCard = function(){
        var profileCard = document.createElement('div');
        var titleElement = document.createElement('h2');
        var textElement = document.createElement('p');
    
        titleElement.innerHTML = this.title;
        textElement.innerHTML = this.text;
        profileCard.className = 'profile-card';
    
        profileCard.appendChild(titleElement);
        profileCard.appendChild(textElement);
    
        return profileCard;
    }
}
var profileContainer = document.querySelector('.profile-cards');

var maggie = new ProfileCard({
    title: 'Maggie',
    text: 'Maggie wishes she were called Magpie'
});

var bert = new ProfileCard({
    title: 'Bert',
    text: 'Bert wishes he were called Dusty'
});

profileContainer.appendChild(maggie.getCard());
profileContainer.appendChild(bert.getCard());





/*
// Användning av prototyper nedan.
// card ska representera hela kortet,- allmäna attribut 
// och container:n
function Card(card){
    // container är elementet som kortet ligger i
this.container = document.querySelector(card.container);
// attribut sets rep alla allmänna attribut för korten

this.title = card.attributeSet.title;
// this.text behövs inte här eftersom de skiljler sig i innehåll

this.card = document.createElement('div'); // åtkomlig utifrån

var heading = document.createElement('h2'); // inte åtkomlig utifrån

// classList = en lista med className
heading.classList.add(card.attributeSet.headingTheme);
this.card.classList.add(card.attributeSet.mainStyle);
heading.innerHTML = this.title; // sets text till heading
this.card.appendChild(heading);


}
// sätter putCard på prototypen så kan den återanvändas
Card.prototype.putCard = function(){
this.container.appendChild(this.card);
}

function ProfileCard(profile){
    Card.call(this, {
        container: '.profile-cards',
        attributeSet : {
            mainStyle : 'profile-card',
            headingTheme: 'theme-darkBlue',
            title: profile.title
        }
    });

    function prepareBody(card){
        var body = document.createElement('p');
        body.innerHTML = profile.text;
        card.appendChild(body);
    }
    prepareBody(this.card);
}
// ProfileCard = subfunktionen, Card = Superfunktionen
ProfileCard.prototype = Object.create(Card.prototype);
ProfileCard.prototype.constructor = ProfileCard;

function AirplaneCard(airplane){
    Card.call(this, {
        container: '.airplane-cards',
        attributeSet:{
            mainStyle: 'airplane-card',
            headingTheme: 'theme-darkRed',
            title: airplane.title
        }
    });

    function prepareBody(card){
        var text = document.createElement('p');
        var delays = document.createElement('footer');

        text.innerHTML = airplane.information;
        delays.innerHTML = airplane.delays;

        card.appendChild(text);
        card.appendChild(delays);
    }
    prepareBody(this.card);


}
AirplaneCard.prototype = Object.create(Card.prototype);
AirplaneCard.prototype.constructor = AirplaneCard;

var sas = new AirplaneCard({
    title: 'SAS',
    information: 'SAS makes a living out of piloting planes',
    delays: 'Ill-defined'
});

var maggie = new ProfileCard({
    title: 'Maggie',
    text: 'Maggie wishes she were a motorvehicle'
});

var bert = new ProfileCard({
    title: 'Bert',
    text: 'Bert wishes he were a motorvehicle'
});

[maggie, sas, bert].forEach((card) =>{
    card.putCard();
});

var listitems = document.querySelectorAll('.container li');
// var listiems = document.getElementsbyTagName('li');


listitems.forEach((item) => {
   item.addEventListener('mouseover', function(event){
    this.style.backgroundcolor = 'red';
   });
   item.addEventListener('mouseout', function(event){
       this.style.backgroundcolor = 'darkblue';
   });
});

var nameInput = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');
var submitButton = document.getElementById('submit');
var templateOutput = document.querySelector('#template-output');

submitButton.addEventListener('click', (event) => {
    var name = nameInput.value;
    nameOutput.innerHTML = name;
    nameOutput.style.backgroundColor = "green";
    nameOutput.style.color= "white";
    event.preventDefault();
});

nameInput.addEventListener('input', (event) => {
    nameOutput.innerHTML = event.target.value;
    nameOutput.style.backgroundColor = "green";
    nameOutput.style.color= "white";
});
*/

