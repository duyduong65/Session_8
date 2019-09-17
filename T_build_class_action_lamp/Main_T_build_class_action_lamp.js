let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };

    this.DecreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    };
};

let FlashLamp = function () {
    this.setBattery = function(battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if(this.status){
            alert("Lighting");
        } else {
            alert("No Linghting");
        }
    };
    this.turnOn = function () {
        this.status = True;
    };
    this.turnOff = function () {
        this.status = False;
    }
};

let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write(`Battery Infor ${flashLamp.getBatteryInfo()} <br>`);
flashLamp.light();

document.write(`turn on <br>`);
flashLamp.turnOn();
flashLamp.light();
document.write(`Battery info: ${flashLamp.getBatteryInfo()} <br>`);

document.write("turn off <br>");
flashLamp.turnOff();
flashLamp.light();


