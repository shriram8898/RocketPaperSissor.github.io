let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(option){
  if(option === 'r')
  	return "Rock";
  else if(option === 'p')
  	return "Paper";
  else
  	return "Scissor";
}

function win(userOption,computerOption){
  const smallUser = "user".sub();
  const smallComp = "computer".sub();
  const userOption_div = document.getElementById(userOption);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =`${convertToWord(userOption)}${smallUser} beats ${convertToWord(computerOption)}${smallComp} . ${"You WON! :)".fontcolor("green")}`;
  userOption_div.classList.add("green-glow");
  setTimeout( () => userOption_div.classList.remove("green-glow") , 800);
}

function lose(userOption,computerOption){
  const smallUser = "user".sub();
  const smallComp = "computer".sub();
  const userOption_div = document.getElementById(userOption);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =`${convertToWord(userOption)}${smallUser} lost to ${convertToWord(computerOption)}${smallComp} . ${"You LOST :(".fontcolor("red")}`;
  userOption_div.classList.add("red-glow");
  setTimeout( () => userOption_div.classList.remove("red-glow") , 800);
}

function draw(userOption,computerOption){
  const smallUser = "user".sub();
  const smallComp = "computer".sub();
  const userOption_div = document.getElementById(userOption);
  result_p.innerHTML =`${convertToWord(userOption)}${smallUser} equals ${convertToWord(computerOption)}${smallComp} . ${"It's a DRAW ".fontcolor("chocolate")}`;
  userOption_div.classList.add("grey-glow");
  setTimeout( () => userOption_div.classList.remove("grey-glow") , 800);
}

function getComputerOption(){
  const options = ['r', 'p', 's'];
  const randomValue = Math.floor(Math.random() * 3);
  return options[randomValue];
}

function game(userOption){
 const computerOption = getComputerOption();
 switch(userOption + computerOption){
 	case "rs":
 	case "pr":
 	case "sp":
 	  win(userOption,computerOption);
 	  break;
 	case "sr":
 	case "rp":
 	case "ps":
 	  lose(userOption,computerOption);
 	  break;
 	case "rr":
 	case "pp":
 	case "ss":
 	  draw(userOption,computerOption);
 	  break;
 }
}

function main(){
  rock_div.addEventListener('click',() => game("r"));
  paper_div.addEventListener('click',() => game("p"));
  scissor_div.addEventListener('click',() => game("s"));
}

window.onload = function () {
	main();
}
