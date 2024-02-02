const gameBoard = document.querySelector("#gameBoard");
// context it is what we draw
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
// size of the ball and the diameter is 25
const ballRadius = 12.5;
// how far do we want our paddles to move when we press down on the button
const paddleSpeed = 50;
let intervalID;
let ballSpeed = 1;
// ball placed in the center
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
// the direction in which the ball is headed on the X axis
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
// we defione 2 paddles objects
// this one will be in the top left corner
let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0,
};

let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight - 100,
};

window.addEventListener("keyboard", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
drawPaddles();
function gameStart() {}

function nextTick() {}

function clearBoard() {}
function drawPaddles() {
  ctx.strokeStyle = paddleBorder;

  ctx.fillStyle = paddle1Color;
  ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

  ctx.fillStyle = paddle2Color;
  ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
  ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}

function createBall() {}

function moveBall() {}
function drawBall() {}
function checkCollision() {}
function changeDirection() {}

function updateScore() {}
function resetGame() {}
