/* 
-생성자 패턴-
기존에 클래스를 제공하지 않았던 자바스크립트가 
ES6에서 class 키워드 제공을 통해 향상된 패턴 
*/

class NewPerson {
  name: string;
  age: number;
  say: Function = function () { };

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.say = () => {
      console.log(`[NEW] ${this.name} is ${this.age} years old!`)
    };
  }
}

const newPerson = new NewPerson('LEE', 28);
newPerson.say();