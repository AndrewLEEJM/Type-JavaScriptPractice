function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object", name: 'JaeMin'};
printLabel(myObj);

/* ------------------------------------------------------------ */

interface LabeledValue {
  label: string;
}

function printLabelVal(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObject = {size: 10, label: "Size 10 Object"};
printLabelVal(myObject);

/* -----------선택적 프로퍼티 (Optional Properties)------------ */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/* -----------읽기전용 프로퍼티 (Readonly properties)----------- */

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // 오류!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // 오류!
// ro.push(5); // 오류!
// ro.length = 100; // 오류!
// a = ro; // 오류!

/* 
readonly vs const
readonly와 const 중에 어떤 것을 사용할 지 기억하기 가장 쉬운 방법은 
변수와 프로퍼티중 어디에 사용할지 질문해 보는 것입니다. 
변수는 const를 사용하고 프로퍼티는 readonly를 사용합니다.
 */

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

/* ------------------------------------------------------------ */

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
