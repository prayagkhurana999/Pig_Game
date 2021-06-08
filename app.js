/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/   
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.dice').style.display='none';


//Roll Dice
document.querySelector('.btn-roll').addEventListener('click',function (){

	 dice = Math.floor(Math.random()*6)+1;

	document.querySelector('.dice').style.display='block';
	document.querySelector('.dice').src='dice-'+dice+'.png';

	if(dice===1){
		activePlayer===0 ? activePlayer = 1 : activePlayer = 0;
		roundScore=0;
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		//document.querySelector('.dice').style.display='none';
	}
	else{
		roundScore=parseInt(roundScore)+parseInt(dice);
		document.getElementById('current-'+activePlayer).innerHTML=roundScore;
	}
});


//Hold
document.querySelector('.btn-hold').addEventListener('click',function(){
	var x=document.querySelector('#score-'+activePlayer);
	scores[activePlayer]+=roundScore;
	x.innerHTML=scores[activePlayer];
	if(scores[activePlayer]>=100){
		document.querySelector('#name-'+activePlayer).innerHTML='Winner';
		
		document.querySelector('.btn-hold').style.display="none";
		document.querySelector('.btn-roll').style.display='none';
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';
		document.querySelector('.dice').style.display='none';
	}
	else{
	activePlayer===0 ? activePlayer = 1 : activePlayer = 0;
	roundScore=0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display='none';
}
});

//New Game
document.querySelector('.btn-new').addEventListener('click',function(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;

	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	document.querySelector('.dice').style.display='none';
	document.querySelector('.btn-hold').style.display="block";
	document.querySelector('.btn-roll').style.display='block';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
});