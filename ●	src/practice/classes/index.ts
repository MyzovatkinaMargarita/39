import { Counter } from "./Counter";

const counter = new Counter();
console.log("Экземпляр Counter:", counter);


console.log("Начальное значение value:", counter.value); // 0

counter.increment();
counter.increment();
console.log("После двух increment:", counter.value); // 2

counter.decrement();
console.log("После decrement:", counter.value); // 1

counter.reset();
console.log("После reset:", counter.value); // 0


const a = new Counter();
const b = new Counter();

a.increment();
a.increment();

b.increment(); 

console.log("a.value =", a.value);
console.log("b.value =", b.value);

