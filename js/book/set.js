const set = new Set([1,2,3,6]);
console.log(set);
console.log(set.has(1));
set.delete(1);
console.log(set);
set.forEach((v1, v2, set) => {
  console.log(v1, v2, set)
})