const one = document.getElementById('button1');
const two = document.getElementById('button2');
const three = document.getElementById('button3');
const four = document.getElementById('button4');
const five = document.getElementById('button5');
const six = document.getElementById('button6');
const seven = document.getElementById('button7');
const eight = document.getElementById('button8');
const nine = document.getElementById('button9');
const zero = document.getElementById('button0');
const dot = document.getElementById('button.');
const plus = document.getElementById('button+');
const minus = document.getElementById('button-');
const multiply = document.getElementById('button*');
const divide = document.getElementById('button/');
const equal = document.getElementById('buttonEnter')
const reset = document.getElementById('buttonEscape');
const Result = document.querySelector('.result');
const Equation = document.querySelector('.equation');
const Backspace = document.getElementById('buttonBackspace');


let String = '';
let Key = '';
one.onclick = function(){
    String+='1';
    Equation.value = String;
    Key = '1';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
two.onclick = function(){
    String+='2';
    Equation.value = String;
    Key = '2';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
three.onclick = function(){
    String+='3';
    Equation.value = String;
    Key = '3';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
four.onclick = function(){
    String+='4';
    Equation.value = String;
    Key = '4';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
five.onclick = function(){
    String+='5';
    Equation.value = String;
    Key = '5';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
six.onclick = function(){
    String+='6';
    Equation.value = String;
    Key = '6';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
seven.onclick = function(){
    String+='7';
    Equation.value = String;
    Key = '7';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
eight.onclick = function(){
    String+='8';
    Equation.value = String;
    Key = '8';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
nine.onclick = function(){
    String+='9';
    Equation.value = String;
    Key = '9';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
zero.onclick = function(){
    String+='0';
    Equation.value = String;
    Key = '0';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
dot.onclick = function(){
    String+= '.';
    Equation.value = String;
    Key = '.';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
plus.onclick = function(){
    String+= '+';
    Equation.value = String;
    Key = '+';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
minus.onclick = function(){
    String+='-';
    Equation.value = String;
    Key = '-';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
multiply.onclick = function(){
    String+='*';
    Equation.value = String;
    Key = '*';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
divide.onclick = function(){
    String+='/';
    Equation.value = String;
    Key = '/';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
equal.onclick = function(){
    
    String = ((eval(String))).toFixed(2);
    Result.value = String || '0';
    String = '';
    Key = '=';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
reset.onclick = function(){
    
    String = '';
    Result.value = '0';
    Equation.value = '';
    Key = 'Escape';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
Backspace.onclick = function(){
    if(String === '0' || !String){
        return;
    }
    String  = String.slice(0,-1);
    Equation.value = String || ''; 
    Key = 'Backspace';
    document.getElementById(`button${Key}`).style.backgroundColor = "white";
    setTimeout(() => {
        document.getElementById(`button${Key}`).style.backgroundColor = "rgb(183, 179, 179)";
    }, 120);
}
Result.value = '0';
document.body.onkeydown = function(){
    if(event.key !== '0' && event.key !== '1' && event.key !== '2' && event.key !== '3' && event.key !== '4' && event.key !== '5' && event.key !== '6' && event.key !== '7' && event.key !== '8' && event.key !== '9' && event.key !== '0' && event.key !== '.' && event.key !== '/' && event.key !== '+' && event.key !== '*' && event.key !== '-' && event.key !== 'Enter' && event.key !== 'Backspace' && event.key !== '(' && event.key !== ')' && event.key !== 'Escape' && event.key !== '='){
        return;
    }
    else if(event.key === 'Escape'){
        String = '';
        Result.value = '0';
        Equation.value = '';
    }
    else if(event.key === 'Backspace'){
        if(String === '0' || !String){
            return;
        }
        String  = String.slice(0,-1);
        Equation.value = String || ''; 
        document.getElementById(`button${event.key}`).style.backgroundColor = "white";
        return;
    }
    else if(event.key === 'Enter' || event.key === '=' ){

        String = ((eval(String))).toFixed(2) ;
        Result.value = String || '0';
        
        String = '';
        document.getElementById(`buttonEnter`).style.backgroundColor = "white";
        setTimeout(() => {
            document.getElementById(`buttonEnter`).style.backgroundColor = "rgb(183, 179, 179)";
        }, 120);
        return;
    }
    else{
        String += event.key;
    }

    Equation.value = String;
    document.getElementById(`button${event.key}`).style.backgroundColor = "white";

}
document.body.onkeyup = function() {
    document.getElementById(`button${event.key}`).style.backgroundColor = "rgb(183, 179, 179)";
}
