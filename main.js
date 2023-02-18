const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const btn = document.querySelector(".btn-next")
const score = document.querySelector(".textlog")
const gameover = document.querySelector(".your")
const answer = document.querySelector(".result")
let buttons = document.querySelectorAll('.images [data-selection]');
let button = document.querySelectorAll('.images-second [data-selection]');
let playerScoreCount = 0;
let computerScoreCount = 0;


const playerScoreValue = localStorage.getItem("playerScore");
if (playerScoreValue !== null) {
  playerScoreCount = parseInt(playerScoreValue);
  playerScore.textContent = playerScoreCount.toString();

  if(playerScoreCount == 3){
    playerScoreCount = 0
    computerScoreCount = 0
    localStorage.setItem('playerScore', playerScoreCount);
    localStorage.setItem('computerScore', computerScoreCount);
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    }
  }



const computerScoreValue = localStorage.getItem("computerScore");
if (computerScoreValue !== null) {
  computerScoreCount = parseInt(computerScoreValue);
  computerScore.textContent = computerScoreCount.toString();

  if(computerScoreCount == 3){
    playerScoreCount = 0
    computerScoreCount = 0
    localStorage.setItem('playerScore', playerScoreCount);
    localStorage.setItem('computerScore', computerScoreCount);
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
  }
}



const SELECTIONS = [
  {name: 'rock'},
  {name: 'paper'},
  {name: 'scissors'}
]

let computerGame;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function Handler() {
    for (let j = 0; j < buttons.length; j++) {
      if (buttons[j] !== this) {
        buttons[j].style.display = 'none';
      } else {
        const selectionName = buttons[i].dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
        buttons[j].removeEventListener('click', Handler);
        buttons[j].style.transform = "translateX(150px)"
      }
    }
    computerTurn();
    Winner();
  });
};

function makeSelection(selection) {
  console.log(selection)
}

function Winner() {
  let playerMe = document.querySelector(".images [data-selection]:not([style*='display: none'])");
  let playerSelectionName = playerMe.dataset.selection;
  let computerSelectionName = computerGame.dataset.selection;
  let result;


  if (playerSelectionName  === computerSelectionName) {
    playerMe.style.background = 'var(--win)'
    computerGame.style.background = 'var(--win)'
    result = "Draw";
  } else if (
    playerSelectionName === 'rock' && computerSelectionName === 'scissors' ||
    playerSelectionName === 'paper' && computerSelectionName === 'rock' ||           
    playerSelectionName === 'scissors' && computerSelectionName === 'paper')
    {

    playerMe.style.background = 'var(--win)'
    computerGame.style.background = 'var(--lose)'
    result = "You win!";
    playerScoreCount++;
    localStorage.setItem('playerScore', playerScoreCount);
    playerScore.textContent = playerScoreCount;
    if(playerScoreCount == 3){
      btn.style.background = 'red'
      btn.textContent = 'PLAY AGAIN'
      score.style.display = 'flex'
      btn.style.fontSize = "1rem"
      answer.textContent = "You Win"
    }
  } else {
    playerMe.style.background = 'var(--lose)'
    computerGame.style.background = 'var(--win)'
    result = "Computer wins!";
    computerScoreCount++;
    localStorage.setItem('computerScore', computerScoreCount);
    computerScore.textContent = computerScoreCount;
    if(computerScoreCount == 3){
      btn.style.background = 'red'
      btn.textContent = 'PLAY AGAIN'
      btn.style.fontSize = "1rem"
      score.style.display = 'flex'
      answer.textContent = "You lose"
      answer.style.color = 'red'
    }
  }

}

btn.addEventListener('click', ()=> {
  window.location.reload()
})


function computerTurn() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    computerGame = button[randNum - 1];
    for (let i = 0; i < button.length; i++) {
    if (button[i] !== computerGame) {
    button[i].style.display = 'none';
  } else {
      computerGame.style.transform = "translateX(-150px)";
    }
  }
}








if (window.matchMedia("(max-width:1200px)").matches) {
  // code for handling clicks on buttons for mobile devices
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function Handler() {
      buttons[i].style.transform = 'translateX(80px)'
      computerGame.style.transform = "translateX(-80px)";
    });
  }
} 


if (window.matchMedia("(max-width:700px)").matches) {
  // code for handling clicks on buttons for mobile devices
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function Handler() {
      buttons[i].style.transform = 'translateX(40px)'
      computerGame.style.transform = "translateX(-40px)";
    });
  }
}

if (window.matchMedia("(max-width:430px)").matches) {
  // code for handling clicks on buttons for mobile devices
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function Handler() {
      buttons[i].style.transform = 'translateX(15px)'
      computerGame.style.transform = "translateX(-15px)";
    });
  }

  function Winner() {
    let playerMe = document.querySelector(".images [data-selection]:not([style*='display: none'])");
    let playerSelectionName = playerMe.dataset.selection;
    let computerSelectionName = computerGame.dataset.selection;
    let result;


    if (playerSelectionName  === computerSelectionName) {
      playerMe.style.background = 'var(--win)'
      computerGame.style.background = 'var(--win)'
      result = "Draw";
    } else if (
      playerSelectionName === 'rock' && computerSelectionName === 'scissors' ||
      playerSelectionName === 'paper' && computerSelectionName === 'rock' ||           
      playerSelectionName === 'scissors' && computerSelectionName === 'paper')
      {

      playerMe.style.background = 'var(--win)'
      computerGame.style.background = 'var(--lose)'
      result = "You win!";
      playerScoreCount++;
      localStorage.setItem('playerScore', playerScoreCount);
      playerScore.textContent = playerScoreCount;
      if(playerScoreCount == 3){
        btn.style.background = 'red'
        btn.textContent = 'PLAY AGAIN'
        score.style.display = 'flex'
        btn.style.fontSize = "0.7rem"
        answer.textContent = "You Win"
      }
    } else {
      playerMe.style.background = 'var(--lose)'
      computerGame.style.background = 'var(--win)'
      result = "Computer wins!";
      computerScoreCount++;
      localStorage.setItem('computerScore', computerScoreCount);
      computerScore.textContent = computerScoreCount;
      if(computerScoreCount == 3){
        btn.style.background = 'red'
        btn.textContent = 'PLAY AGAIN'
        btn.style.fontSize = "0.7rem"
        score.style.display = 'flex'
        answer.textContent = "You lose"
        answer.style.color = 'red'
      }
    }
  }  
}