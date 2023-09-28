function Ride_Function() {
    var Height , Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function() {
    var Age , Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18)? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}

function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trailhawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
var Zeeshan=new Vehicle("Honda","Civic",2020,"Red-wine")
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a "+Erik.Vehicle_Color+"-colored"+Erik.Vehicle_Model+
    "manufactured in "+Erik.Vehicle_Year;
}
function myCar(){
    document.getElementById("New_and_This").innerHTML=
    "Zeeshan drives a "+Zeeshan.Vehicle_Color+" -colored "+Zeeshan.Vehicle_Model+
    " manufactured in "+Zeeshan.Vehicle_Year;
}

function CellPhone(Make,Model,Year,OS) {
    this.CellPhone_Make=Make;
    this.CellPhone_Model=Model;
    this.CellPhone_Year=Year;
    this.CellPhone_OS=OS;
}

function tax(){
    document.getElementById("Nested_Function").innerHTML=Base();
    function Base(){
        var Base_Tax=12;
        function Add_Withholding(){Base_Tax += 2;}
        Add_Withholding();
        return Base_Tax;

    }
}

