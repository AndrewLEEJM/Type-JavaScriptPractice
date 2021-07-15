function Person(name){
  this.name = name
}

const me = new Person('Lee');

console.log(Person.prototype === me.__proto__);
console.log(me.constructor === Person);

console.log(Person.prototype);
console.log(me.__proto__);
console.log(me.constructor);
console.log(Person);

const Per = (function(){
  function Per(name) {
    this.name = name;
  }

  Per.prototype = {
    say(){
      console.log(`Hi! ${this.name}`);
    }
  }

  return Per;
}());

const me2 = new Per('Park');
console.log(me2.say());
console.log(me2.name);
console.dir(me2);

const arr = [1,2,3];
arr.x = 10;
console.log(arr);
console.log(arr.length);