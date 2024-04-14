const ball = document.getElementById('ball');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const gameArea = document.querySelector('.game-area');


let ballX = 290;
let ballY = 190;
let ballSpeedX = 0;
let ballSpeedY = 0;
let leftPaddleY = 150;
let rightPaddleY = 150;
const paddleSpeed = 10;


function update() {
    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;
   
    // Check collision with top and bottom walls
    if (ballY <= 0 || ballY >= gameArea.clientHeight - 20) {
        ballSpeedY *= -1;
    }
   
    // Check collision with paddles
    if ((ballX <= 55 && ballY + 20 >= leftPaddleY && ballY <= leftPaddleY + 115) ||
        (ballX >= gameArea.clientWidth - 75 && ballY + 20 >= rightPaddleY && ballY <= rightPaddleY + 115)) {
        ballSpeedX *= -1;
    }
   
    // Check if ball is missed by paddles
    if (ballX <= 10 || ballX >= gameArea.clientWidth - 20) {
        resetBall();
    }


    // Update ball position
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';


    // Update paddle positions
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';
}


function resetBall() {
    ballX = 290;
    ballY = 190;
    ballSpeedX *= Math.random() < 0.5 ? -1 : 1;
    ballSpeedY *= Math.random() < 0.5 ? -1 : 1;
}

function endGame(){
    resetBall();
    ballSpeedX = 0;
    ballSpeedY = 0;
    
}

function startGame(){
    resetBall();
    ballSpeedX = 3;
    ballSpeedY = 3;
}


function keyDownHandler(e) {
    if (e.key === 'ArrowUp' && rightPaddleY > 0) {
        rightPaddleY -= paddleSpeed;
    } else if (e.key === 'ArrowDown' && rightPaddleY < gameArea.clientHeight - 100) {
        rightPaddleY += paddleSpeed;
    } else if (e.key === 'w' && leftPaddleY > 0) {
        leftPaddleY -= paddleSpeed;
    } else if (e.key === 's' && leftPaddleY < gameArea.clientHeight - 100) {
        leftPaddleY += paddleSpeed;
    }
}


document.addEventListener('keydown', keyDownHandler);


setInterval(update, 1000 / 60);


function wordGuess() {
    for (limit = 1; limit < 4; limit++) {
        var guess = prompt("Try to guess the Word!(Hint: Where are We?)");
        if (guess.toLowerCase() === "kleinhacks") {
            alert("Correct!!");
            break;
        } else if (guess.toLowerCase() != "kleinhacks") {
            if(limit===3){alert("You lost!")} else{
            alert("You got the word wrong. " + String(3 - limit) + " attempts left.");}
        }
    }
}