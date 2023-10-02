function Call_Loop() {
    var Number="";
    var S=10;
    while (S<100) {
        Number += "<br>" +S;
        S++
    }
    document.getElementById("Loop").innerHTML=Number;
}

var text="What the hell!";
var length=text.length;
document.getElementById("length").innerHTML=length;

var cars=["Corola","Civic","Alto","Cultus"];
var answer="";
var counter;
function for_loop(){
    for (counter=0; counter<cars.length; counter++){
        answer += cars[counter]+"<br>";
    }
    document.getElementById("Cars").innerHTML=answer;
}

function array_function() {
    var objects=[];
    objects[0]="Vape";
    objects[1]="Mouse";
    objects[2]="Laptop";
    objects[3]="Cellphone";
    document.getElementById("Array").innerHTML="The " + objects[2]+" is one of the objects infront of me right now.";
}

function constant_function(){
    const watch= {type:"wrist",brand:"Tag",color:"Blue"};
    watch.price="$350";
    watch.color="Black";
    document.getElementById("Constant").innerHTML="This "+watch.type+" watch is of "+watch.color+" color and priced "+watch.price; 
}

var H= 100;


function let_func()
{
     let H=101;
document.write("<br>" + H);
}
document.write("<br>" + H);

function my_func() {
return H;
}

let shoes= {
    make:"bata",
    color:"brown",
    price:"Rs.2000",
    description: function () {
        return "This shoe is of "+this.make+" brand, "+this.color+" color and priced "+this.price;
    }
};
document.getElementById("shoe_object").innerHTML=shoes.description();

var text= "";
for (let t=0;t<9;t++) {
    if (t===5) {break;}
    text+="The number is "+t+"<br>";
} 
document.getElementById("break").innerHTML=text;

var text= "";
for (let i=0;i<8;i++) {
    if (i===4) {continue;}
    text += "The number is "+i+"<br>";
}
document.getElementById("continue").innerHTML=text;