"use strict";
/*
-생성자 패턴-
기존에 클래스를 제공하지 않았던 자바스크립트가
ES6에서 class 키워드 제공을 통해 향상된 패턴
*/
var NewPerson = /** @class */ (function () {
    function NewPerson(name, age) {
        var _this = this;
        this.say = function () { };
        this.name = name;
        this.age = age;
        this.say = function () {
            console.log("[NEW] " + _this.name + " is " + _this.age + " years old!");
        };
    }
    return NewPerson;
}());
var newPerson = new NewPerson('LEE', 28);
newPerson.say();
