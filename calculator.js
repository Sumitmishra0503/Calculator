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
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('mul');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const Result = document.querySelector('.result');
const Equation = document.querySelector('.equation');


let String = '';

one.onclick = function(){
    String+='1';
    Equation.value = String;
}
two.onclick = function(){
    String+='2';
    Equation.value = String;
}
three.onclick = function(){
    String+='3';
    Equation.value = String;
}
four.onclick = function(){
    String+='4';
    Equation.value = String;
}
five.onclick = function(){
    String+='5';
    Equation.value = String;
}
six.onclick = function(){
    String+='6';
    Equation.value = String;
}
seven.onclick = function(){
    String+='7';
    Equation.value = String;
}
eight.onclick = function(){
    String+='8';
    Equation.value = String;
}
nine.onclick = function(){
    String+='9';
    Equation.value = String;
}
zero.onclick = function(){
    String+='0';
    Equation.value = String;
}
dot.onclick = function(){
    String+= '.';
    Equation.value = String;
}
plus.onclick = function(){
    String+= '+';
    Equation.value = String;
}
minus.onclick = function(){
    String+='-';
    Equation.value = String;
}
multiply.onclick = function(){
    String+='*';
    Equation.value = String;
}
divide.onclick = function(){
    String+='/';
    Equation.value = String;
}
equal.onclick = function(){
    
    String = ((eval(String))).toFixed(2);
    Result.value = String || '0';
    String = '';
}
reset.onclick = function(){
    
    String = '';
    Result.value = '0';
    Equation.value = '';
}
Result.value = '0';
document.body.onkeydown = function(){
    if(event.key !== '0' && event.key !== '1' && event.key !== '2' && event.key !== '3' && event.key !== '4' && event.key !== '5' && event.key !== '6' && event.key !== '7' && event.key !== '8' && event.key !== '9' && event.key !== '0' && event.key !== '.' && event.key !== '/' && event.key !== '+' && event.key !== '*' && event.key !== '-' && event.key !== 'Enter' && event.key !== 'Backspace' && event.key !== '(' && event.key !== ')'){
        return;
    }
    else if(event.key === 'Backspace'){
        console.log(event.key);
        if(String === '0' || !String){
            return;
        }
        String  = String.slice(0,-1);
        Equation.value = String || ''; 
        
        return;
    }
    else if(event.key === 'Enter'){
        console.log(event.key);
        String = ((eval(String))).toFixed(2);
        Result.value = String;
        String = '';
        return;
    }
        console.log(event.key);
        String += event.key;
        Equation.value = String;

}
