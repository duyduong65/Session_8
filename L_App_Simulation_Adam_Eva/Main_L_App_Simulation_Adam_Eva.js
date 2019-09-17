let Apple = function (weight) {
    this.weight = weight;


    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.DecreaseWeight = function () {
        this.weight--;
    }
};

let Human = function (name, gender, weight, isString) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.isString = isString;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (value) {
        this.gender = value;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.getIsString = function () {
        return this.isString;
    };
    this.setIsString = function (value) {
        this.isString = value;
    };
    this.IncreaseWeight = function () {
        this.weight++;
    }

};

let adam = new Human("Adam", "Male", 60, "tôi là Adam");
let eva = new Human("Eva", "female", 50, "Tôi là Eva");
let apple = new Apple(10);
console.log(adam.getIsString());
console.log(eva.getIsString());
let showApple = document.getElementById('showApple');
let showWeightAdam = document.getElementById('showWeightAdam');
let showWeightEva = document.getElementById('showWeightEva');

display();

function display() {
    showApple.innerHTML = `Số táo còn lại là: ${apple.getWeight()}`;
    showWeightAdam.innerHTML = `Weight Adam: ${adam.getWeight()}`;
    showWeightEva.innerHTML = `Weight Eva: ${eva.getWeight()}`;

}

function EatAnApple(name) {
    if (apple.getWeight() > 0) {
        name.IncreaseWeight();
        apple.DecreaseWeight();
    } else if (apple.getWeight() == 0) {
        alert("Bạn đã ăn quả táo cuối cùng");
        apple.setWeight(0);
        name.setWeight(name.getWeight());
    } else if (apple.getWeight() < 0) {
        alert("đã hết táo để ăn");
    }
    console.log(name.getWeight());
    console.log(apple.getWeight());
    display();
}
