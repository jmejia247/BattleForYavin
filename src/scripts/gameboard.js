import Ship from "./ship";
import TIE from './TIE-fighter';
import InputHandler from "./input";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const splash = document.getElementById('#splash')
  
  // function startGame() {
  //   if (splash.style.display === 'block') {
  //     splash.style.display = 'none';
  //     canvas.style.display = 'block';
  //   }
  // }

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const GAME_WIDTH = 1435;
  const GAME_HEIGHT = 700;

  // let ship = new Ship(canvas.width, canvas.height);
  let x_wing = document.getElementById("x-wing");
  let tie = document.getElementById('tie');
  let explosion = document.getElementById('explosion');
  let ship = new Ship(GAME_WIDTH, GAME_HEIGHT, x_wing, ctx);
  const fighter = new TIE(GAME_WIDTH, GAME_HEIGHT, tie, explosion);
  const empire = [];

  // function spawnEnemies() {
  //   if (empire.length < 10) {
  //     empire.push(new TIE(GAME_WIDTH, GAME_HEIGHT, tie))
  //     console.log(empire)
  //   }
  // }


  setInterval(() => {
    if (empire.length < 10) {
      empire.push(new TIE(GAME_WIDTH, GAME_HEIGHT, tie))
    }
  }, 1000);

  new InputHandler(ship);

  let lastTime = 0;

  function gameLoop(timestamp) {
        let dt = timestamp - lastTime;
        lastTime = timestamp;

        
        ctx.clearRect(0, 0, 1440, 790);
        ship.update(dt);
        ship.draw(ctx);
        
        // setInterval(() => {
        //   spawnEnemies();
        // }, 10000)
        // spawnEnemies();


        empire.forEach(fighter => {
          if (fighter.collision === false) {
            fighter.update(dt, ctx, ship.projectiles);
          } else {
            let pos = empire.indexOf(fighter);
            empire.splice(pos, 1);
          }
          if (fighter.position.x < 0) {
            let pos = empire.indexOf(fighter);
            empire.splice(pos, 1);
          }
        })
        // for (let i = 0; i < empire.length; i++) {
        //   const fighter = empire[i];
        //   fighter.update(dt, ctx);
        //   if (fighter.position.x < 0) {
        //     console.log(empire)
        //     empire.slice(i, 1)
        //   }
        // }


        requestAnimationFrame(gameLoop);
  }
  gameLoop()


  let isRunning = false;

  function togglePause() {
    isRunning = !isRunning;

    if (isRunning) {
      gameLoop();
    }
  }

  if (splash.style.display === 'none') {
    togglePause();
  }
});
