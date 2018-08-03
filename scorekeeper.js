var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var res = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1score = 0;
var p2score = 0;
var endscore = 5;
var endscoredisplay = document.querySelector("#endScore");
var gameOver = false;
var inputScore = document.querySelector("input");

p1.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score === endscore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
});
p2.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		if(p2score === endscore){
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2score;
	}
});
res.addEventListener("click",function(){
	p1display.textContent = "0";
	p2display.textContent = "0";
	p1score = 0;
	p2score = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
});

inputScore.addEventListener("change",function(){
	endscoredisplay.textContent = inputScore.value;
	endscore = Number(inputScore.value);
});
