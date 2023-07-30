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
Backspace.onclick = function(){
    if(String === '0' || !String){
        return;
    }
    String  = String.slice(0,-1);
    Equation.value = String || ''; 
}
Result.value = '0';
document.body.onkeydown = function(){
    if(event.key !== '0' && event.key !== '1' && event.key !== '2' && event.key !== '3' && event.key !== '4' && event.key !== '5' && event.key !== '6' && event.key !== '7' && event.key !== '8' && event.key !== '9' && event.key !== '0' && event.key !== '.' && event.key !== '/' && event.key !== '+' && event.key !== '*' && event.key !== '-' && event.key !== 'Enter' && event.key !== 'Backspace' && event.key !== '(' && event.key !== ')' && event.key !== 'Escape'){
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
    else if(event.key === 'Enter'){

        String = ((eval(String))).toFixed(2) ;
        Result.value = String || '0';
        
        String = '';
        document.getElementById(`button${event.key}`).style.backgroundColor = "white";
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
