var G=20;
function add() {
    document.write(90+G+ "<br>");
}
function sub() {
    document.write(15-G+ "<br>");
}
add();
sub();

function addition() {
    var V=25;
    document.write(25+V+ "<br>");
}
function subtract (){
    document.write(25-V);
}
addition();
subtract();

function multiply() {
    var k=2;
    document.write(25*k+ "<br>");
}
function subtract(){
    document.write(25-k);
}
multiply();


function get_Date(){
    if(new Date().getHours()>18) {
        document.getElementById("Dont Greet").innerHTML="We are closed after 6pm";
    }
}

function conditon(){
if (330==33*10) {
    document.write("330 is equals to 33 times 10.");
}
}
function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>=18) {
        Drive="You are old enough to drive!";
    }
    else {
        Drive="You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

function Time_function(){
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time";      
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternoon";
    }
    else {
        Reply="It is evening";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}

