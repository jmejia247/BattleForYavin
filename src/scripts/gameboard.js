import Ship from "./ship";
import TIE from './TIE-fighter';
import InputHandler from "./input";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const GAME_WIDTH = 1435;
  const GAME_HEIGHT = 790;

  // let ship = new Ship(canvas.width, canvas.height);
  let x_wing = document.getElementById("x-wing");
  let tie = document.getElementById('tie');
  let ship = new Ship(GAME_WIDTH, GAME_HEIGHT, x_wing, ctx);
  const empire = [];

  function spawnEnemies() {
    if (empire.length < 10) {
      empire.push(new TIE(GAME_WIDTH, GAME_HEIGHT, tie))
      console.log(empire)
    }
  }

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
          fighter.update(dt, ctx)
          if (fighter.position.x < 0) {
            let pos = empire.indexOf(fighter);
            empire.splice(pos, 1)
          }
        })


        requestAnimationFrame(gameLoop);
  }

  gameLoop();
});
