const o = {
  name: "Lee",
  age: 28,
  get fullName() {
    return `${this.name} ${this.age}`;
  },
  set fullName(name) {
    [this.name, this.age] = name.split(" ");
  },
};
o.__proto__;
console.log(o);
console.log(o.__proto__);
console.log(Object.getOwnPropertyDescriptor(o, "age"));

console.log(o.fullName);
o.fullName = "Kim 30";
console.log(o.fullName);
o.age = 40
console.log(o.fullName);
console.log('===============================================');

//객체 확장 금지 (추가 x / 읽기, 쓰기, 재정의, 삭제 o)
console.log(Object.isExtensible(o));
Object.preventExtensions(o);
console.log(Object.isExtensible(o));
console.log(o);
o.height = 177;
console.log(o); // 확장을 막아놨기 때문에 적용 안됨
console.log('===============================================');

//객체 밀봉 (추가, 삭제, 재정의 x / 읽기, 쓰기 o)
console.log(Object.isSealed(o));
Object.seal(o);
console.log(Object.isSealed(o));
console.log(Object.getOwnPropertyDescriptors(o));
o.height = 177;
delete o.age
console.log(o);
o.age = 50;
console.log(o);

console.log('===============================================');
//객체 동결
console.log(Object.isFrozen(o));
Object.freeze(o);
console.log(Object.isFrozen(o));
console.log(Object.getOwnPropertyDescriptors(o));