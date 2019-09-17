function Husky(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHuskyElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.getSpeed();
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= this.getSpeed();
        console.log("ok: " + this.left);
    };
    this.moveUp = function () {
        this.top -= this.getSpeed();
    };
    this.moveDown = function () {
        this.top += this.getSpeed();
        console.log('ok: ' + this.top);
    };
    this.setSpeed = function (speed) {
        this.speed = speed;
    };
    this.getSpeed = function () {
        return this.speed;
    };
}

// let randomWidth = Math.floor(Math.random() * window.innerWidth);
// let randomHeight = Math.floor(Math.random() * window.innerHeight);
let husky = new Husky('husky.jpg', 0, 0, 150);
husky.setSpeed(100);
let maxWith = window.innerWidth - husky.size;
let maxHeight = window.innerHeight - husky.size;


function start() {
    if (husky.left < maxWith && husky.top === 0) {
        husky.moveRight();
    } else if (husky.left >= maxWith && husky.top < maxHeight) {
        husky.moveDown();
    } else if (husky.left > 0 && husky.top >= maxHeight) {
        husky.moveLeft();
    } else if (husky.left <= 0 && husky.top > 0) {
        husky.moveUp();
    }
    document.getElementById('game').innerHTML = husky.getHuskyElement();
    requestAnimationFrame(start);
}

start();
