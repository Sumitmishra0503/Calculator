const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const doubleZero = document.getElementById('doubleZero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('mul');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const Result = document.querySelector('.result');


// alert('Welcome !!')

let String = '';

one.onclick = function(){
    String+='1';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
two.onclick = function(){
    String+='2';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
three.onclick = function(){
    String+='3';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
four.onclick = function(){
    String+='4';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
five.onclick = function(){
    String+='5';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
six.onclick = function(){
    String+='6';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
seven.onclick = function(){
    String+='7';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
eight.onclick = function(){
    String+='8';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
nine.onclick = function(){
    String+='9';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
zero.onclick = function(){
    String+='0';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
doubleZero.onclick = function(){
    String+= '0';
    String+= '0';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
plus.onclick = function(){
    String+= '+';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
minus.onclick = function(){
    String+='-';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
multiply.onclick = function(){
    String+='*';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
divide.onclick = function(){
    String+='/';
    Result.innerHTML = String;
    // localStorage.setItem('val',String);
    // console.log(`${String}`);
}
equal.onclick = function(){
    
    String = (eval(String));
    // localStorage.setItem('val',String);
    Result.innerHTML = String || '0';
    String = '';
}
reset.onclick = function(){
    
    String = '';
    Result.innerHTML = '0';
}
