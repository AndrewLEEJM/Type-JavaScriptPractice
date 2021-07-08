const obj = {
  'gd-gd': 'ghfhf',
  "":"asd"
};
let key = 'he-he';

obj[key] = 'world';

console.log(obj);
console.log(obj[""]);

const obj2 = {
  1:1,
  2:2,
  gsg: 'fsa',
  ff: function () {
    return '2' + this[1];
  }
};

let aa = 'gsg'

console.log(obj2);
console.log(obj2[aa]);
console.log(obj2[1]);
console.log(obj2.ff());

delete aa;
console.log(obj2[aa]);
console.log(aa);

delete obj2[1]
console.log(obj2);

const obj3 = {
  check: 'ch',
  say() {
    return '2' + this.check;
  }
};

console.log(obj3.say())