function FirstDictionary(){
    var Car= {
        Type:"Sedan",
        Color:"Black",
        Brand:"Toyota",
        Model: 1999,
        Model:1985,
    };
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML=Car.Model;
    document.getElementById("Dictionary").innerHTML=Car.Brand;
}