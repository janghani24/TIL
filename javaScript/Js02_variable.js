"use strict";
// 쓰면 좀더 정확히 지적해줌
/*

    타입들
    number, string, boolean, null, undefined
    object, function, ...

*/

// Let

let agee = 30;
console.log(agee);
console.log('---------------');
// var 문제가 뭔지

// 1. global Scope (Hoisting) - 전역변수처럼 해석

var whyDontUse;
whyDontUse = 1111;
console.log(whyDontUse);

var test;
console.log(test);

console.log('-----------------');

// 2. 블락 무시
{
    var whyDontUse2;
    whyDontUse2 = 22222;
    console.log(whyDontUse2);
}
console.log(whyDontUse2);




// 내 나이, 키 저장 후 콘솔에 출력
let age = 29;
let height = 160.3;

console.log(age);
console.log(height);