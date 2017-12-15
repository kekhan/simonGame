var simonTurn=false;
var simonArr=[];
var userArr=[];
var userTurn =false;
var MaxSimonSays=20;
var count=0;
var correct=0;


function start(){
	simonTurn=true;
	simonSays();
	//userMemory();
}


function stop(){
	userTurn=false;
	simonTurn=false;
	//clearTimeout(userArr[i]);
}


function simonSays(){
	/*this function will mimic simon*/
	var myvar;
	if(simonTurn){
		var simonInput = Math.floor(Math.random()*4);
		simonArr.push(simonInput);
		console.log(simonArr);
		for(var i=0;i<simonArr.length;i++){
			console.log('i',i);
			var num2Str=simonArr[i].toString();
			console.log(num2Str);
			if(simonArr[i]===0){
				var element= document.getElementsByClassName('btn'+num2Str)[0];
				var originColr= element.style.backgroundColor;
				element.style.backgroundColor='#00FF00'
				myvar=setTimeout(function(){
			
					
					element.style.backgroundColor=originColr;//green
					console.log("inside settimer 0");
					clearTimeout(myvar);

				}, 1000);
				
				console.log("out settimer 0");
			}
			else if(simonArr[i]==1){
				var element= document.getElementsByClassName('btn'+num2Str)[0];
				var originColr= element.style.backgroundColor;
				element.style.backgroundColor='#FF004C'
				myvar=setTimeout(function(){
					
					
					element.style.backgroundColor=originColr; //red
					console.log("inside settimer 1");
					
				}, 1000);
				
				console.log("out settimer 1");


			}
			else if(simonArr[i]==2){
				var element= document.getElementsByClassName('btn'+num2Str)[0];
				var originColr= element.style.backgroundColor;
				element.style.backgroundColor='#EBFF74'
				
				myvar=setTimeout(function(){
				
					element.style.backgroundColor=originColr;//yellow
					console.log("inside settimer 2");
					clearTimeout(myvar);
				}, 1000);
				
				console.log("out settimer 2");

			}
			else if(simonArr[i]==3){
				var element= document.getElementsByClassName('btn'+num2Str)[0];
				var originColr= element.style.backgroundColor;
				element.style.backgroundColor='#0065FF'
				myvar= setTimeout(function(){
					element.style.backgroundColor=originColr;//blue
					console.log("inside settimer 3");
					clearTimeout(myvar);
				}, 1000);
				console.log("out settimer 3");

			}
			else{
				console.log("oops, something is wrong");
			}
			//clearTimeout(myvar);
		}


	}

	userTurn=true;
	console.log("userTurn");
	//userMemory();
}


function userMemory(btn){
	if(userTurn){
		var userInput = btn.value;
		var str2num=Number(userInput);
		console.log('userArr',userArr);
		userArr.push(str2num);
		console.log(userArr);
		if(userArr.length===simonArr.length){
			check();

		}


	}


}


function check(){
	console.log('user',userArr);
	console.log('in check()');
    for (var i=0; i<userArr.length;i++){
    	console.log('in check() loop');
    	if(userArr[i]===simonArr[i]){
    		console.log('in check() condi');
    		correct++;
    		console.log('correct',correct);
    		count++;
    		console.log('count',count);
    		console.log('userArrlength',userArr.length);
    		console.log('user',userArr);
    		if(correct===simonArr.length){
    			userTurn=false;
    			simonTurn=true;
    			simonSays();
    		}
    	}
    	else if (simonArr[i]!==userArr[i]){
    		count=0;
    		console.log('no match');
    		userTurn=false;
    		simonTurn=false;
    		simonSays
    	}
    }
    userArr=[];
}

