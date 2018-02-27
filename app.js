
console.log("hello world");

alert("Hello World");
console.log(typeof "hej");/*String*/
console.log(typeof 45);
console.log(typeof true); /*true*/
console.log(new array()); /*error undefined*/
console.log(typeof null);
console.log(typeof undefined);
/*Numbers */
console.log("Result: " + 1 + 4); /*14 Concatenation*/
console.log("Result: " + Number(1 + 4));/* 5*/
console.log(Number("Result: " + 1 + 4));/*NaN - not a number*/
console.log(isNaN(Number("Result: "+ 1 + 4))); /*true*/
console.log(0.2 + 0.1); /*0.30000000000000004*/
console.log((0.2 + 0.1).toFixed(2));/*0.30*/
console.log((0.3 + 0.999).toFixed(1));/*1.3*/
console.log((0.3 + 0.049).toFixed(1));/*0.3*/
console.log((0.3 + 0.051).toFixed(1));/*0.4*/
console.log(Math.sin(Math.PI));
console.log(Math.random()*10);/*6.662209713983702*/
var a = 0.3; var b = 4.3; var c = 0.1; var d = 0.6;
console.log(Number(((0.3 + 4.3 + 0.1 + 0.6)/4).toFixed(1)));/*1.3*/
console.log(typeof Math.sin(30)); /*Numer*/

var sinus = Math.sin(30);  /*define sinus*/
if(Math.sin(30) == "Number"){
    console.log("Result: " + sinus + " = " + result);
}

else 
 {
    (console.log("Invalid input, not a number: " + sinus)); 
 }  /*-0.988....*/

var tal1 = 2;
var tal2 = 5;
console.log(tal1 / tal2); /*0.4*/
console.log(x = 2); console.log(y = 5);
console.log(x/y);

var f = 66;
console.log(f/0);


/*Strings*/

console.log("Hello World");/*String - always use this method */ 
console.log(new String("Hello World"));/*String  */ 
console.log(typeof new String("Hello World"));
console.log("Hello World" .length);
console.log("Hello World" .substr(3, 4));/* lo W */
console.log("Hello World" .charAt( 4)); /* o */
console.log("Hello World"[2]); /* l */

var statement = "flaggstångs putsar assistent"; 
var stlength = statement.length;
console.log("The fourteenth character of the statement " + statement + " is " + "flaggstångs putsar assistent".charAt(15)); 
console.log("The fourteenth character of the statement " + statement + " is " + "flaggstångs putsar assistent".substr(15, stlength)); 

var firstspace = statement.indexOf(" ");
console.log("First space of the statement is: " + firstspace ); 
console.log("First word of the statement is: " + statement.substr(0,firstspace) ); 
var  charfirstSpace = statement.charAt(12);

console.log("Second word in the statement is: " + statement(charfirstSpace, ));

var statement = "flaggstångs putsar assistent"; 
var number = statement.indexOf("k");
boolean(number) = true; /*not correct*/
console.log("The statement contains the letter k: " + boolean(number)); 


/* Iterationer */

/* Dont use while(true)  gives stack overflow*/
while(undefined) {
    console.log("inside while");
}
console.log("outside while"); /* hoppar ur loopen*/

for(var index = 0; index< "hello world". length; index++){
    
    console.log("hello world"[index]);
}

var nr  = "";
for(var i = 0; i <= 10; i++){
    nr = nr + i
   
}   console.log(nr); /*012345678910*/
var num = 10;
while(num >= 0){
    console.log(num);
    num--;
}

var mjau = "";
var nr = prompt("how many mjaus do you want?");
if(nr>0){
    for(index=1; index<=nr; index++){
        mjau = mjau + " " + mjau;
    }
    console.log(mjau);
   }
   
 else{ console.log(":( good bye"); }   





/* Arrays */

var array = new Array();
var array = [1, 9, 45];
var array = new Array();
array[0] = "hello";
array[1] = "world";
console.log(array); /*(2) ["hello","world"]*/

array.push("hello");
array.push("world"); /*Lägger till i slutet*/

console.log(array.pop()); /*tar ut world*/
console.log(array.pop()); /*tar ut hello*/

var array = [10];
array.push("hello");
array.push("world");
console.log(array);

for(var index = 0; index< array.length; index++){
    
    console.log(array[index]);
}

/*Linked lists are more efficient to remove and reorganise lists 
because they use pointers that simply point to the next element
whilst array list use random access memory and therefore take more 
time to reorganise when you remove an element*/

// prova att ändra var till let
for(let index = 0; index<array.length; index++){
    console.log(array[index]);
} // index will generate index not defined errors but it will work

var array = ['hello','world','!'];

for (var value of array){
    console.log(value);
}

// lambda
array.forEach((value, index, array) => {
    console.log(index + ". " + value);
});

var array = [23, 45, 54, 12, 77];
console.log(array[0]);
console.log(array[4]);

array[4] = 1;

var bestArray = [ 1, 2, 3, 4, 5];
for(index =0; index<bestArray.length; index++)
console.log(bestArray[i]);

var popArray = [5, "hello", 54, 17, 23];
console.log(popArray);
var length = popArray.length;
for(var index = length; index>=0; index--){
console.log(popArray.pop());}
console.log(popArray);


/* functions */

function subtraction(a, b){
    return a - b;
}

function addition(a, b){
    a = (typeof a + b) == 'string' ? undefined : a;// kortkommando - om a + b blir en string ge 'undefined' annars ge 'a'
    return a + b;
}

// en function är en förstklass object

var sumOf = function addition(a, b){
return a + b;
}
// Eller skriv

var sumOf = (a , b) =>{
    return a + b;
}

/* Tre olika typer av objekt i javascript

Host Objects: (Environment objects, ex. webbläsarens objekt)
- document
- window
- console
- node 

core objects: (Inbyggda objekt i javascript)
- String, Object, Math, Boolean osv.

Author objects:
- Object som vi skapar själva
- Objekt som ges av externa bibliotek

*/
/*
var person = new Object();
person.name = 'Jakob';
console.log(person.name);
person.name = new Object();
person.name.first = 'Akinyi';
person.name.last = 'Ocholla';

console.log(person.name);
*/
/*
//Object literal
var person = {
   name: {
       first: 'Akinyi', last: 'Ocholla'
   },
   preferences: {
    color: 'blue',
    sport: 'tennis',
    hobby: 'hiking'
},

roar: function(){
    return 'Roooar';
},
say: function(speech){
    return this.name.first + " says: " + speech;
}
   
}

console.log(person.say("hello world"));*/

// Construktor functions
// funktioner har ett eget scope,
// alltså kan vi inkapsla i funktioner med  "this"
/*
function AirPlane(name, number){
    this.name = name;
    this.number = number;

    this.toString = function(){
        return this.name + ' #' + this.number;
   }
}*/
/*
var plane = new AirPlane("SAS", 42);
//plane.capacity = 200;

//console.log(plane.toString());
plane._proto_.toString = function(){
    return this.name + ' #' + this.number;
}

var cropduster = new AirPlane("Ryan Air", 424);
console.log(plane._proto_); // _proto_ är AirPlane. Forsätter du att ._proto_ så kommer du till slut till null
*/

console.log(AirPlane.prototype.prototype); // undefined

AirPlane.prototype.toString = function(){
    return this.name + ' #' + this.number; // toString = sätta en egenskap. toString() = anropa en function

}

var sas = new AirPlane('SAS', 42);
console.log(sas.toString());

AirPlane.prototype.capacity = 200;

sas.capacity = 100; // två olika sätt att sätta capacity

console.log(sas._proto_ == AirPlane.prototype);

//------------
var person = Object.create(Object.prototype, {
    name: {
        value: 'Akinyi',
        enumerable: true,
        writable: true,
        configurable: true
    },
    age: {
        value: 23,
        enumerable: true,
        writable: true,
        configurable: true 
    },
    toString: {
        value: function(){
            return this.name + " is " + this.age 
            + "years";
        },
        enumerable: true,
        writable: true,
        configurable: true
    }
});
console.log(person['name']);// Akinyi

for(var property in person){
    console.log("Property: " + property + ", property value " +
person[property]);
    
}  // Property: name, property value Akinyi
   // Property: age, property value 23

//////////
   /******** getters setters *********/

   function Car(reg, age){
       this.reg = reg;
       this.age = age;
   }

   Object.defineProperty(Car.prototype, 'info', { // info är en ny
    get: function(){
        return this.reg + " has been on the road for "
         + this.age + " years";
        }, 
    set: function(value){
        var valueParts = value.split(" ");
        this.reg = valueParts[0];
        this.age = valueParts[1];
        }
   });


   var car = new Car("Bruum", 12);
   console.log(car.info);

   car.info = "GHE123 13";
   console.log(Car.info); // Bruum has been on the road for 12 years

   ////////////////
   var array = ['hello', 'world', 'tomorrow'];
   console.log("First: " +  array[0]);
   console.log("Last: " + array[array.length -1]);
  
   Object.defineProperties(Array.prototype, {
       'first': {
           get: function(){
               return this[0];
           }
       },
       'last': {
           get: function(){
               return this[this.length - 1];
           }
       },
       'middle': {
           value: function(){
           return this[(this.length/2).toFixed(1)];
       }
    }
   });
   console.log(array.first); //First: hello
   console.log(array.last); // Last: tomorrow
   console.log(array.middle());

   /******** Inheritance *********/

   function Vehicle(speed){
       this.speed = speed;
   }

   Vehicle.prototype.drive = function(){
       return "Drove" +  this.speed + " units";
   }

   function Car(owner, age){
       Vehicle.call(this, 15);
       this.owner = owner;
       this.age = age;
   }
   // behövs for att ärva prototypen
   Car.prototype = Object.create(Vehicle.prototype);

   var car = new Car('Karl', 10);
   console.log(car);

   // Sugar syntax som har java syntax men funkar i java script
   //, vehicle är fortfarande en funktion
   /* class Vehicle{
       constructor(speed) {
           this.speed = speed;
       }
       drive(){
           return "Drove " + this.speed + " units";
       }
   }

  class Car extends Vehicle{
      constructor(owner, age){
          super(15);
          this.owner = owner;
          this.age = age;
      }
      drive(){
          return this.owner + " " + super.drive();
      }
  }

   */

  Object.defineProperty(Car.prototype, 'price', {
    value: '40Euro'
})