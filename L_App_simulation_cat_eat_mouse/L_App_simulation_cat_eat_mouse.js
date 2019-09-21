let Rat = function (name, weight, status, speed) {
    this.name = name;
    this.weight = weight;
    this.status = status;
    this.sound = "Chít ... Chít...";
    this.speed = speed;

    this.getName = () => {
        return this.name;
    };
    this.setName = value => {
        this.name = value;
    };
    this.getWeight = () => {
        return this.weight;
    };
    this.setWeight = value => {
        this.weight = value;
    };
    this.getSpeed = () => {
        return this.speed;
    };
    this.setSpeed = (value) => {
        this.speed = value;
    };
    this.getStatus = () => {
        return this.status;
    };
    this.setStatus = value => {
        this.status = value;
    };
    this.getSound = () => {
        return this.sound;
    };
};

let Cat = function (name, weight, speed, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.sound = "Moew...Moew";
    this.speed = speed;
    this.maxSpeed = maxSpeed;

    this.getName = function () {
        return this.name;
    };
    this.getSpeed = () => {
        return this.speed;
    };
    this.getMaxSpeed = () => {
        return this.maxSpeed;
    };
    this.setMaxSpeed = (value) => {
        this.maxSpeed = value;
    };
    this.setSpeed = (value) => {
        this.speed = value;
    };
    this.setName = value => {
        this.name = value;
    };
    this.getWeight = () => {
        return this.weight;
    };
    this.setWeight = value => {
        this.weight = value;
    };
    this.getSound = () => {
        return this.sound;
    };
    this.CatchAndEat = mouse => {
        if (this.getSpeed() > mouse.getSpeed()) {
            mouse.setStatus(false);
            this.weight++;
            this.getSound();
            mouse.getSound();
        }
    };
};

let speedMouse = Math.floor(Math.random() * 20) + 40;
let mouseWeight = 1;
let mouseName = "jerry";
let catWeight = 12;
let catSpeed = 55;
let catMaxSpeed = 70;
let catName = "Tom";

let tom = new Cat(catName, catWeight, catSpeed, catMaxSpeed);
let jerry_1 = new Rat(mouseName, mouseWeight, true, speedMouse);
let jerry_2 = new Rat(mouseName, mouseWeight, true, speedMouse);
let jerry_3 = new Rat(mouseName, mouseWeight, true, speedMouse);

function tomAndJerry() {
    tom.CatchAndEat(jerry_1);
    console.log(tom.getWeight());
    tom.CatchAndEat(jerry_2);
    console.log(tom.getWeight());
    tom.CatchAndEat(jerry_3);
    console.log(tom.getWeight());
}
tomAndJerry();
