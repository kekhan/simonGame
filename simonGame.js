/*This progam mimics the Simon Game. The computer will
turn on when user clicks on button. The computer will generate tandom order of
colors on the screen. The user will have to click on the colors in the correct
order. If user clicks on wrong color the game will stop.
The true and false will build the game loop.
*/
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
	userTurn = false;
	if(compTurn){
		// call the randomColor generater
		getRandomNumber();
		console.log(queuedNumbers);

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
		compTurn = false;
		userTurn = true;
		user_input();
	}

}

function getRandomNumber(){
	// produces a number 0-3 for index of color array
	var number = Math.floor(Math.random()*4);
	queuedNumbers.push(number);

}

function checkMatch(){
	// checks if clicks match simon's array
	console.log("checking");
}

function user_input(btn){
	/*
	gets user input from html file. Checks if user input matches computers
	input. Each user input is checked for match with queuedNumbers array.
	Example:
	user array [0,0,1] and comp array is [0,0,2]
	Arrays have differnt number in index 2.
	*/
	if(userTurn){
		compTurn=false;
		console.log(btn);
		compTurn=true;
		simonTurn();
	}
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

//start the game
function startGame(){
	compTurn=true;
	simonTurn();
}
