function Addition_Function() {
    var addition=56+43;
    document.getElementById("Math").innerHTML="56+43="+addition;
}
function Subtraction_Function() {
    var sub=76-50;
    document.getElementById("Minus").innerHTML="76-50="+sub;
}
function division_function() {
    var div=1000/25;
    document.getElementById("Divide").innerHTML="1000/25=" +div;
}
function multiply_function(){
    var multiply=900*2;
    document.getElementById("Multiply").innerHTML="900*2="+multiply;
}
function multiple_operations(){
    var more_math=(8*7)+56/10-5;
    document.getElementById("math_problem").innerHTML="8 multiplied by 7, plus 56, divided by 10 and then subtracted by 5 equals " + more_math;
}
function modulus_operator(){
    var remainder=25%6;
    document.getElementById("modulus").innerHTML="When you divide 25 by 6 you have a remainder of: "+remainder;
}

function negation_operator(){
    var Z=34;
    document.getElementById("negation").innerHTML=-Z;
}
function increment_function(){
    var Z=34;
    Z++;
    document.write(Z);
}
function decrement_function(){
    var Z=34;
    Z--;
    document.write(Z);
}

window.alert(Math.random()*90);

function math_object () {
document.getElementById("rounded").innerHTML = Math.round(4.6);
}