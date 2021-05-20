/* 
-팩토리 패턴-
클래스가 객체를 생성하는 패턴
Factory 클래스에 의해 생성하는 객체는 동일한 인터페이스를 가져야 함
*/

class Person {
  constructor() { }
  make(type) {
    switch (type) {
      case 'house':
        return new House();
      case 'car':
        return new Car();
      default:
        return false;
    }
  }

}

class House {
  constructor() { }
  say() {
    console.log('My house is so huge!');
  }
}

class Car {
  constructor() { }
  say() {
    console.log('My car is so expensive!');
  }
}

const person = new Person();

const house = person.make('house');
const car = person.make('car');

house.say();
car.say();