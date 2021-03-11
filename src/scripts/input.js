export default class InputHandler {
    constructor(ship) {
        document.addEventListener('keydown', event => {
            // alert(event.key)
            event.preventDefault();
            switch (event.key) {
                case 'ArrowLeft':
                    ship.moveLeft();
                    break;
                case 'ArrowRight':
                    ship.moveRight();
                    break;
                case 'ArrowUp':
                    ship.moveUp();
                    break;
                case 'ArrowDown':
                    ship.moveDown();
                    break;
                case ' ':
                    ship.shootProjectile();
                    break;
                default:
                    break;
            }
        });
        document.addEventListener('keyup', event => {
            switch (event.key) {
              case " ":
                  ship.canShoot = true;
              default:
                break;
            }
        });
    }
}