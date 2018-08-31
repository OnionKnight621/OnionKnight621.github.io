// Rules 
// 1) Player must guess a num, between min and max
// 2) Player gets a certain amount of guesses
// 3) Notify player of guesses remaining
// 4) Notify the player of the correct answer if lose
// 5) Player can try again

//Game values
let min = 1,
    max = 13,
    winningNum = getRandomNum(min,max),
    guessesLeft = 4;

//UI elements
const gameUi = document.querySelector('#game');
const minNumUI = document.querySelector('.min-num');
const maxNumUI = document.querySelector('.max-num');
const guessBtnUI = document.querySelector('#guess-btn');
const guessInputUI = document.querySelector('#guess-input');
const messageUI = document.querySelector('.message');

//Assing UI min and max
minNumUI.textContent = min;
maxNumUI.textContent = max;

//Play ahain Event listener
gameUi.addEventListener('mousedown',function (el) {
    if (el.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for guess
guessBtnUI.addEventListener('click', function(){
    let guess = parseInt(guessInputUI.value);

    //Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
    }
    //Check if won
    else if (guess === winningNum) {
        //Game over - WON
        gameOver(true,`The number ${winningNum} is correct, You WIN!`);
    }else{
        //Wrong num
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game over - LOST
            gameOver(false,`Game over, you lost. The correct number was ${winningNum}`);
        }else{
            //Game continues - wrong try
            //Change border color
            guessInputUI.style.borderColor = 'red';
            //Clear input
            guessInputUI.value = '';
            //Tell about wrong guess
            setMessage(`Guess is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//Gam over func
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInputUI.disabled = true;
    //Change border color
    guessInputUI.style.borderColor = color;
    //Set text color
    messageUI.style.color = color;
    //Set message
    setMessage(msg);

    //Play again
    guessBtnUI.value = 'Play again';
    guessBtnUI.className += 'play-again';
}

//Set message
function setMessage(msg, color) {
    messageUI.textContent = msg;
    messageUI.style.color = color;
}
//Get random winning num
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}