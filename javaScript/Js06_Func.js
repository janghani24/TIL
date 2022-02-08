"use strict";

function call(){
    console.log('hn')
    console.log('29')
}

function gugudan(){
    for (let a = 1; a < 10; a++) {
        console.log(`2x${a}=${a*2}`)
    }
}

// 숫자를 2개 집어 넣으면 합을 출력해주는 함수
function add(a, b){
    console.log(a+'+'+b+'='+(a+b))
}

// 넣은 숫자의 단을 출력해주는 함수
function printGugudan(a){
    for (let i = 1; i < 10; i++) {
        console.log(a+'x'+i+'='+(a*i))
    }
}
function printGugudan2(){
  let myInput = document.myForm.i1;
  let myValue = myInput.value;

 // alert(myValue);
    for (let i = 1; i < 10; i++) {
        console.log(myValue+'x'+i+'='+(myValue*i))
    }

    myInput.value="" // 썼던 밸류값 지우기
    myInput.focus() // 클리하고도 커서 표시

    return false;

}

function printGugudan3(){
    let myInput = document.getElementById('i2');
    let myValue = myInput.value
    //alert(myValue)
    for (let i = 1; i < 10; i++) {
        console.log(myValue+'x'+i+'='+(myValue*i))
    }
    myInput.value=""
    myInput.focus()

    return false;
}