let hello: string = '타입스크립트 연습';
console.log(hello);

// 튜플 타입으로 선언
let x: [string, number, string];
// 초기화
x = ["hello", 10, 'bye']; // 성공
// 잘못된 초기화
// x = [10, "hello"]; // 오류

console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)) // 오류, 'number'에는 'substring' 이 없습니다.

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

console.log(c); // 값이 2인 'Green'이 출력됩니다.

enum Colors {Red, Green, Blue}
let d: string = Colors[1];

console.log(d);

let numberNull: number | null = null;

//타입 단언 Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;