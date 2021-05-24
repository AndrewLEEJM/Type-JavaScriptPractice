"use strict";
var hello = '타입스크립트 연습';
console.log(hello);
// 튜플 타입으로 선언
var x;
// 초기화
x = ["hello", 10, 'bye']; // 성공
// 잘못된 초기화
// x = [10, "hello"]; // 오류
console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)) // 오류, 'number'에는 'substring' 이 없습니다.
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // 값이 2인 'Green'이 출력됩니다.
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var d = Colors[1];
console.log(d);
var numberNull = null;
//타입 단언 Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
