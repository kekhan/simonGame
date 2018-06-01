// Global variables 
// blue, yellow,red,green
const COLORARRAY = ['#110DFF','#FFF200','#FC0014','#104700'];
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
				element = document.getElementById('green-btn"');
				var color = '31E644';
				changeColor(element,color);

			}
			else if(queuedNumbers[i] == 1){
								// change the color of the box
				element = document.getElementById('red-btn"');
				var color = '#DF3140';
				changeColor(element,color);

			}
			else if(queuedNumbers[i] == 2){
				element = document.getElementById('yellow-btn"');
				var color = '#EBD35D';
				changeColor(element,color);

			}
			else if(queuedNumbers[i] == 3){
				element = document.getElementById('blue-btn"');

				var color = '#5496BF';
				changeColor(element,color);

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
	element.style.backgroundColor = color;


	setInterval(function(){ 

		console.log(element,color);
	},500);

}

