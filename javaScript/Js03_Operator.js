"use strict";

let a = 1;
let b = "1";

let c = a + b;
console.log(typeof c)

console.log(a + b)
console.log(a / b)  // 타입이 다이나믹하게 정해짐

console.log('---1')

// +-*/%
let x = 5;
let y = 2;

let hap = x + y;
let cha = x - y;

// 문자 연산자
let hi = 'hi~~~~~'
let hi2 = 'hello~~~~'
console.log(hi + hi2);
console.log(hi - hi2);  // NaN (Not a Number)

// 복합연산자
x = x + 1;
console.log(x)
x += 1;
console.log(x)
x++
console.log(x)

