function call(){
    let id1 = document.getElementById('id1');
    let pw1 = document.getElementById('pw1');
if(id1.value == ''){
    alert('id를 입력 하세요!')
    id1.focus();
    return false;
}
if(pw1.value == ''){
    alert('pw를 입력 하세요!')
    pw1.focus();
    return false;
}

location.href='resultLogin.html?a='+id1.value+'&b='+pw1.value
}

function ageCal(){
    let age1 = document.getElementById('age1');

    if(age1.value == ''){
        alert('출생년도를 입력 하세요!')
        age1.focus();
        return false;
    }
    if(age1.value <1000){
        alert('출생년도는 4자리로 입력해주세요.')
        age1.focus();
        return false;
    }

location.href='ageResult.html?a='+age1.value

}