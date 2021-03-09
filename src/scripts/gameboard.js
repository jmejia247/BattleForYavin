import Ship from "./ship";
import TIE from './TIE-fighter';
import InputHandler from "./input";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const splash = document.getElementById("splash");
  const endgame = document.getElementById('endgame');
  const gameover = document.getElementById('gameover');

 
  const playButton = document.getElementById('switch');
  function startGame() {
    if (splash.style.display === "block") {
      splash.style.display = "none";
      canvas.style.display = "block";
    }
  }
  playButton.addEventListener('click', () => {
    startGame();
    togglePause();
  })

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const GAME_WIDTH = 1435;
  const GAME_HEIGHT = 700;

  let score = 0;
  
  let x_wing = document.getElementById("x-wing");
  let tie = document.getElementById("tie");
  let explosion = document.getElementById("explosion");
  let ship = new Ship(GAME_WIDTH, GAME_HEIGHT, x_wing, ctx);
  const fighter = new TIE(GAME_WIDTH, GAME_HEIGHT, tie, explosion);
  const empire = [];

  setInterval(() => {
    if (empire.length < 10) {
      empire.push(new TIE(GAME_WIDTH, GAME_HEIGHT, tie));
    }
  }, 3000);

  let isRunning = false;
  function togglePause() {
    isRunning = !isRunning;
    if (isRunning) {
      gameLoop();
    }
  }

  new InputHandler(ship);

  let lastTime = 0;

  function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    document.getElementById("score").innerHTML = `Score: ${score}/15`;

    ctx.clearRect(0, 0, 1440, 790);
    ship.update(dt, ctx, empire);

    if (ship.collision === true) {
      document.getElementById("score").innerHTML = "The Empire has won!";
      canvas.style.display = "none";
      gameover.style.display = 'block';
    }

    empire.forEach((fighter) => {
      if (fighter.collision === false) {
        fighter.update(dt, ctx, ship.projectiles);
      } else {
        let pos = empire.indexOf(fighter);
        empire.splice(pos, 1);
        score += 1;
      }
      if (fighter.position.x < 0) {
        let pos = empire.indexOf(fighter);
        empire.splice(pos, 1);
      }
    });

    requestAnimationFrame(gameLoop);

    if (score >= 15) {
      canvas.style.display = "none";
      endgame.style.display = "block";
      document.getElementById("score").innerHTML = 'The Death Star has been destroyed!';
    }
  }

});
