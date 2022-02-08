function getParameterByName(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    
}
let id = getParameterByName('a');
let pw = getParameterByName('b');

document.write(
    '<h1>id : ' + id + '</h1>' +
    '<h1>pw : ' + pw + '</h1>' 
);