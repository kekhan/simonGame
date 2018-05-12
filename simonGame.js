// Global variables 
// blue, yellow,red,green
const COLORARRAY = ['#110DFF','#FFF200','#FC0014','#104700'];
var queuedColors = [];
var userTurn = false;
var compTurn = false;
var start = false;
//check if game is on
function checkGameState(){
	if(start == true){
		// call the randomColor generater
		randomColorGenerator();
	}

}

//start the game
function startGame(){
	start = true;

}

function randomColorGenerator(){
	// produces a number 0-3 for index of color array
	var number = Math.floor(Math.random()*4);
	queuedColors = queuedColors.push(number);
	console.log(number,queuedColors);


}
