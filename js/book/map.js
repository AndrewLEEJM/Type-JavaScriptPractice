const map = new Map();

map.set('key1', 21123);
map.set('key2', {name: 'min'});

console.log(map)

map.forEach((v, k, map) => console.log(v, k, map));