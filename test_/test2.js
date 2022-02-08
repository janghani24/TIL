function call(){
    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');

// alert(i1.value);
// alert(i2.value);
// alert(i3.value);

    if(i1.value == ''){
        alert('이름을 입력 하세요!')
        i1.focus();
        return false;
    }
    if(i2.value == ''){
        alert('id를 입력 하세요!')
        i2.focus();
        return false;
    }
    if(i3.value == ''){
        alert('pw를 입력 하세요!')
        i3.focus();
        return false;
    }

location.href='test3.html?a='+i1.value+'&b='+i2.value+'&c='+i3.value
// url에서 파라매터를 연결할 때는 ;가 아닌 &사용


}