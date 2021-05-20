"use strict";
/*
-프로토타입 패턴-
객체의 템플릿을 기반으로 새로운 객체를 만들 수 있다.
프로토타입 패턴은 상속을 기반으로 하지만
JavaScript는 Object의 create() 메소드를 활용하여 손쉽게 구현 가능하다.
*/
/* const car = {
  noOfWheels: 4,
  start() {
    return `start ${this.noOfWheels}`;
  },
  stop() {
    return `stop ${this.noOfWheels}`;
  },
};

const myCar1 = Object.create(car, { owner: { value: 'Mung1' } });
const myCar2 = Object.create(car, { owner: { value: 'Mung2' } });

console.log(myCar1.__proto__ === car);
console.log(myCar2.__proto__ === car);

console.log(myCar1.__proto__);
console.log(myCar2.__proto__);

myCar2.noOfWheels += 10;

console.log(myCar1.start());
console.log(myCar1.stop());
console.log(myCar1.noOfWheels);
console.log(myCar1.owner);

console.log(myCar2.noOfWheels); */
var Car = /** @class */ (function () {
    function Car(_wheels) {
        this.noOfWheels = _wheels;
    }
    Car.prototype.start = function () {
        return "start " + this.noOfWheels;
    };
    ;
    Car.prototype.stop = function () {
        return "stop " + this.noOfWheels;
    };
    ;
    return Car;
}());
var car = new Car(4);
var cloneCar1 = Object.create(car, { owner: { value: 'Mung1' } });
var cloneCar2 = Object.create(car, { owner: { value: 'Mung2' } });
console.log(cloneCar1.__proto__ === car);
console.log(cloneCar2.__proto__ === car);
console.log(cloneCar1.__proto__);
console.log(cloneCar2.__proto__);
cloneCar2.noOfWheels += 10;
console.log(cloneCar1.start());
console.log(cloneCar1.stop());
console.log(cloneCar1.noOfWheels);
console.log(cloneCar1.owner);
console.log(cloneCar2.noOfWheels);
