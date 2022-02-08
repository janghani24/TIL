"use strict";

/*
논리 연산자 : 결과가 boolean 나오는거
>, >=, <, <=, ==, !=

*/

/*
결합 연산자 : 논리연산자 여러개 묶을 때
&&, ||, !

*/

/*
삼항 연산자 : 둘 중 하나
조건식 ? true값 : false값
*/
// 나이가 10살 넘으면 welcome 아니면 go home
let age = 5;
let result = age > 10 ? 'welcome' : 'go home';
console.log(typeof result)

// 입장료

let ticket;
// 할인
    // 나이가 10살이 넘으면 1000원, 안넘으면 3000원 할인

// 총금액

let discount = age >10 ? 1000 : 3000;
ticket = 10000;
let totalPrice = 10000 - discount;
console.log(totalPrice)

// 같다 == or === 

let stringNum = '10';
let numberNum = 10;
// 타입 안따짐
console.log(stringNum == numberNum)
console.log(stringNum != numberNum)
// 타입까지 따짐
console.log(stringNum === numberNum)
console.log(stringNum !== numberNum)

console.log('-----------------')
// Objcet

let me1 = {name : 'Mr.Lee', age : 20}; // 객체
let me2 = {name : 'Mr.Lee', age : 20}; // 객체
let me3 = me1;

console.log(me1 == me2)
console.log(me1 === me2)

console.log(me1 == me3)
console.log(me1 === me3)

console.log('----------------------')

console.log(0 == false) // ==는 의미가 같은지를 따질 때
console.log(0 === false)
console.log(null == undefined)
console.log(null === undefined)
console.log("" == false)
console.log("" === false)
