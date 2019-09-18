let SwitchButton = function () {

    this.SwitchOn = function () {
        lamp.turnOn();
    };
    this.SwitchOff = function () {
        lamp.turnOff()
    };
};

let ElectricLamp = function (status) {
    this.status = status;

    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };
    this.turnOn = function () {
        turnOn();
        this.setStatus("True");
    };
    this.turnOff = function () {
        turnOff();
        this.setStatus("False")
    }
};

let switchButton = new SwitchButton("False");
let lamp = new ElectricLamp("False");

function switchOnOff() {
    if (lamp.getStatus() === "False") {
        switchButton.SwitchOn();
    } else {
        switchButton.SwitchOff();
    }
};


function turnOn() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(600, 300, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function turnOff() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(600, 300, 60, 0, 2 * Math.PI);
    ctx.clearRect(0, 0, 1199, 599);
    ctx.strokeStyle = "black";
    ctx.stroke();
}
turnOff();