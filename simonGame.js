// Global variables
// blue, yellow,red,green
const COLORARRAY = ['#110DFF','#f2f093','#FC0014','#104700'];
var queuedNumbers = [];
var userTurn = false;
var compTurn = false;
var start = false;

//check if game is on
function simonTurn(){
	var color;
	if(start){
		// call the randomColor generater
		getRandomColor();

		for(var i=0; i<queuedNumbers.length;i++){
			if(queuedNumbers[i] == 0){
				// change the color of the box
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				element = document.getElementsByClassName(idPlaceHolder)[0];
				var color = '#31E644';
				element.style.backgroundColor = color;


				setInterval(function(){

					element.style.backgroundColor = COLORARRAY[3];

				},1000);



			}
			else if(queuedNumbers[i] == 1){
								// change the color of the box
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				element = document.getElementsByClassName(idPlaceHolder)[0];
				var color = '#DF3140';
				element.style.backgroundColor = color;


				setInterval(function(){

					element.style.backgroundColor = COLORARRAY[2];

				},1000);


			}
			else if(queuedNumbers[i] == 2){
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				element = document.getElementsByClassName(idPlaceHolder)[0];
				var color = '#fffb21';
				element.style.backgroundColor = 'color';


				setInterval(function(){

					element.style.backgroundColor = COLORARRAY[1];

				},1000);


			}
			else if(queuedNumbers[i] == 3){
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				element = document.getElementsByClassName(idPlaceHolder)[0];

				var color = '#5496BF';
				element.style.backgroundColor = color;


				setInterval(function(){

					element.style.backgroundColor = COLORARRAY[0];

				},1000);


			}
		}
	}

}

//start the game
function startGame(){
	start = true;
	simonTurn();

}

function getRandomColor(){
	// produces a number 0-3 for index of color array
	var number = Math.floor(Math.random()*4);
	queuedNumbers.push(number);

}

function checkMatch(){
	// checks if clicks match simon's array
	console.log("checking");
}

function user_input(btn){
	//gets user input
	console.log(btn);

}

function changeColor(element,color){
	/*
	this function will change the color of a square
	*/
	element.style.backgroundColor = color;


	setInterval(function(){

		console.log(element,color);
	},500);

}
