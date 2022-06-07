//create Map using passing array in Map() constructor

const person = new Map([["mango",100],["orange",200],["kiwi",400],["water-melon",30]]);

console.log(person.get("mango"));

console.log(person.set("banana",50));
console.log(person);

console.log(person.size);

console.log(person.delete("banana"));
console.log(person);

console.log(person.has("mango"));
console.log(typeof person);