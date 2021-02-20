let ship;
let laser = [];
let aliens1 = [];
let create = false;
let value = 0;

function preload() {
  spaceShip = loadImage('space-ship-3.png');
  alien = loadImage('alien-2.jpg')
}

function keyReleased() {
  ship.dir(0, 0)
  create = false
}


function distance(x1, y1, x2, y2) {
  return Math.sqrt((y2 - y1) * (y2 - y1) - (x2 - x1) * (x2 - x1))
}

function setup() {
  let grid = width / 100
  createCanvas(900, 900);
  ship = new Ship()

  for (let j = 1; j <= 4; j++) {
    for (let i = 0; i < width / 130; i++) {
      aliens1.push(new Alien(100 * i + 100, height * 0.1 * j))
    }
  }


}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ship.dir(-1, 0)
  } else if (keyCode === RIGHT_ARROW) {
    ship.dir(1, 0)
  } else if (key === ' ') {
    create = false;
    laser.push(new Laser(ship.x, ship.y - 35))
  }
}

function createLaser(condition) {
  if (condition) {
    laser.push(new Laser(ship.x, ship.y - 35))
  }
}

function board(){
  let str = "score : " + value;
  let leftMargin = 70;
  fill(255,150);
  textSize(25);
  text("Press 'space' to shoot ",leftMargin,550);
  text("Press 'left arrow' to move left",leftMargin,580);
  text("Press 'left arrow' to move right",leftMargin,610);
  fill(200,0,0);
  text(str,leftMargin,640);
  fill(255)
  text("Created By : Benhard Sim" , 570,850)
}

function draw() {
  background(0);
  ship.render();
  ship.move();
  createLaser(create);
  board()

  for (let i = laser.length - 1; i >= 0; i--) {
    laser[i].render();
    laser[i].update();
    if (laser[i].y < 0) {
      laser.splice(i, 1)
    }
  }


  // i for the aliens
  for (let i = 0; i < aliens1.length; i++) {
    aliens1[i].render();
    // j for the laser
    for (let j = laser.length - 1; j >= 0; j--) {
      if (dist(laser[j].xb, laser[j].y, aliens1[i].xa, aliens1[i].y) < 40) {
        aliens1.splice(i, 1)
        laser.splice(j, 1)
        console.log("puf")
        value++
      }
    }
  }

}