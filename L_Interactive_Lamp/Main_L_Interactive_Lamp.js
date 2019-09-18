let ElectricLamp = function (status,x,y) {
    this.status = status;

    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };
    this.turnOn = function () {
        creatLamp(x,y);
        this.setStatus(true);
    };
    this.turnOff = function () {
        creatLamp(x,y);
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
        this.setStatus(true);
        this.lamp.turnOn();
    };
    this.SwitchOff = function () {
        this.setStatus(false);
        this.lamp.turnOff()
    };
    this.getConnect = function (lamp) {
        this.lamp = lamp;
    }
};

let switchButton = new SwitchButton(false);
let lamp_1 = new ElectricLamp(false,800,300);
let lamp_2 =new ElectricLamp(false,500,250);
creatLamp(500,250);
switchButton.getConnect(lamp_2);

function switchOnOff(lamp) {
    if (!lamp.getStatus()) {
        switchButton.SwitchOn();
    } else {
        switchButton.SwitchOff();
    }
};

function creatLamp(x,y) {
    if (switchButton.getStatus()) {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    } else if (!switchButton.getStatus()){
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, 2 * Math.PI);
        ctx.clearRect(0, 0, 1199, 599);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

