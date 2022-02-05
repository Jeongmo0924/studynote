// const year = 2022;
// let age = 2022 - 1990 + 1;
// console.log("나는 %d세 입니다.",age);

// const age = 33;
// var year = 2022 - 33 + 1;
// console.log("나는 %d년도에 태어났습니다.", year);

const numOfApples = 123;

let remainder = numOfApples % 10 == 0 ? 0 : 1;
let basket = (numOfApples - (numOfApples % 10)) / 10 + remainder;
console.log("%d개의 바구니가 필요하다.", basket);

const num = 456;
let calculator = num - (num%100);

console.log(calculator);