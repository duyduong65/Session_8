let ElectricLamp = function (status) {
    this.status = status;

    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };
    this.turnOn = function () {
        creatLamp();
        this.setStatus(true);
    };
    this.turnOff = function () {
        creatLamp();
        this.setStatus(false)
    }
};

let SwitchButton = function (status) {
    this.status = status;
    this.lamp = ElectricLamp;

    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };
    this.lamp = ElectricLamp;

    this.SwitchOn = function () {
        this.status = true;
        this.lamp.turnOn();
    };
    this.SwitchOff = function () {
        this.status = false;
        this.lamp.turnOff()
    };
    this.getConnect = function (lamp) {
        this.lamp = lamp;
    }
};

let switchButton = new SwitchButton(false);
let lamp_1 = new ElectricLamp(false);
let lamp_2 =new ElectricLamp(false);
switchButton.getConnect(lamp_2)

function switchOnOff(lamp) {
    if (!lamp.getStatus()) {
        switchButton.SwitchOn();
    } else {
        switchButton.SwitchOff();
    }
};

function creatLamp() {
    if (switchButton.getStatus()) {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(600, 300, 60, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    } else if (!switchButton.getStatus()){
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(600, 300, 60, 0, 2 * Math.PI);
        ctx.clearRect(0, 0, 1199, 599);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}
creatLamp();
