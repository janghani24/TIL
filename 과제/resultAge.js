function getParameterByName(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    
}
let age1 = getParameterByName('a');

let yourAge = 2021 - Number(age1) + 1;
document.write(
    '<h1>나이 : ' + yourAge + '</h1>' 
);