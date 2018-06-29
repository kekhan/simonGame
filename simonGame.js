/*This progam mimics the Simon Game. The computer will
turn on when user clicks on button. The computer will generate tandom order of
colors on the screen. The user will have to click on the colors in the correct
order. If user clicks on wrong color the game will stop.
The true and false will build the game loop.
*/
// Global variables
// blue, yellow,red,green
const COLORARRAY = ['#ADD8E6','#ffffff ','#f9bbc0','#a4ff89'];
var queuedNumbers = [];
var queuedUser = [];
var userTurn = false;
var compTurn = false;
var start = false;
var index = 0;
let score=0;


//check if game is on
function simonTurn(){
	console.log("In Simon function");
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
				let element = document.getElementsByClassName(idPlaceHolder)[0];
				var originalColor = element.style.backgroundColor;
				element.style.backgroundColor = COLORARRAY[3];
				myvar=setInterval(function(){
					element.style.backgroundColor = originalColor;
					clearTimeout(myvar);
				},1000);
			}
			else if(queuedNumbers[i] == 1){
								// change the color of the box
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				let element = document.getElementsByClassName(idPlaceHolder)[0];
				var originalColor = element.style.backgroundColor;
				element.style.backgroundColor = COLORARRAY[2]
				myvar = setTimeout(function(){
					element.style.backgroundColor =originalColor;
					clearTimeout(myvar);
				},1000);
			}
			else if(queuedNumbers[i] == 2){
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				let element = document.getElementsByClassName(idPlaceHolder)[0];
				var originalColor = element.style.backgroundColor;
				element.style.backgroundColor = COLORARRAY[1];
				myvar = setTimeout(function(){
					element.style.backgroundColor = originalColor;
					clearTimeout(myvar);
				},1000);
			}
			else if(queuedNumbers[i] == 3){
				var numToString = queuedNumbers[i].toString();
				var idPlaceHolder = "btn"+numToString;
				let element = document.getElementsByClassName(idPlaceHolder)[0];
				var originalColor = element.style.backgroundColor;
				element.style.backgroundColor = COLORARRAY[0];
				myvar = setTimeout(function(){
					element.style.backgroundColor = originalColor;
					clearTimeout(myvar);
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
function checkMatch(btn,index){
	// checks if clicks match simon's array
	console.log("queuedNumbers[index]", queuedNumbers[index]);
	console.log("checking");
	if(btn==queuedNumbers[index]){
    score+=score;
		console.log(score);
		if(score>=20){
			console.log("User Wins");
			compTurn=false;
			userTurn=false;
		}
		else{
			compTurn=true;
			userTurn=false;
		}
	}
	else{
		console.log("game over,No Match" + btn +" " + queuedNumbers[index]);
		userTurn = false;
		queuedNumbers = [];
		compTurn=false;


	}
}

function user_input(btn){
	/*
	gets user input from html file. Checks if user input matches computers
	input. Each user input is checked for match with queuedNumbers array.
	Example:
	user array [0,0,1] and comp array is [0,0,2]
	Arrays have differnt number in index 2.
	*/

	compTurn=false;
	if(userTurn){
		btn.value;
		var input = Number(btn.value);
		checkMatch(input,index);
		console.log("index in user_input", index);
		index+=1;
	}
	simonTurn();
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
