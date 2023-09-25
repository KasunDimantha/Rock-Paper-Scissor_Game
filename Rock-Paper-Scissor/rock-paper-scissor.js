let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  Lose: 0,
  Tie: 0
};

updateScoreElement();


function playGame(playerMove){

  const computerMove = pickComputerMove();
  let result = ' ';

  if (playerMove === 'scissors') {

    if (computerMove === 'rock'){
      result = 'you lose.';
    }
    else if (computerMove === 'paper'){
      result = 'you win.';
    }
    else if (computerMove === 'scissors'){
      result = 'Tie.';
    }
}

else if (playerMove === 'paper') {

  if (computerMove === 'rock'){
    result = 'you win.';
  }
  else if (computerMove === 'paper'){
    result = 'Tie.';
  }
  else if (computerMove === 'scissors'){
    result = 'you lose.';
  }
}

else if(playerMove === 'rock') {

  if (computerMove === 'rock'){
    result = 'Tie.';
  }
  else if (computerMove === 'paper'){
    result = 'you lose.';
  }
  else if (computerMove === 'scissors'){
    result = 'you win.';
  }
} 

if (result === 'you win.'){
  score.win += 1;
}
else if (result === 'you lose.'){
  score.Lose += 1;
}
else if(result === 'Tie.'){
  score.Tie += 1;
}

 localStorage.setItem('score', JSON.stringify(score));
 
 updateScoreElement();
 document.querySelector('.js-result').innerHTML = result;
 document.querySelector('.js-move').innerHTML = `You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer`;
  
  
}



function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `win: ${score.win}. Lose: ${score.Lose}. Tie: ${score.Tie}.`; 
}

function pickComputerMove(){

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove ='paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}