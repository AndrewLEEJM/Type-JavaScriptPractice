console.log(result1);

result1 = 15120;
var result1;

console.log(result1);

// console.log(result2); let, const 호이스팅 x

let result2 = 15124124120;

console.log(result2);

function add(a, b){
  return a + b;
}
console.log(add('a'));

(function () {
  console.log('ff')
})();
(function () {
  console.log('ff')
}());
!function () {
  console.log('ff')
}();
+function () {
  console.log('ff')
}();

//스코프 체인
let x = 1;
function inner(){
  let x = 2;
  console.log(x);
}
inner();

if(true){
  let x = 3
  console.log(x);
}


console.log(x);

function foo() {
  console.log('global')
}

function bar() {
  function foo(){
    console.log('local')
  }
  foo();
}
bar();