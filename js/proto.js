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