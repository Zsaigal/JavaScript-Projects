function Complete_sentence(){
        var first_part="Pakistan ";
        var second_part="Won the ";
        var third_part="match yesterday";
        var final_sentence=first_part.concat(second_part,third_part);
        document.getElementById("Full_sentence").innerHTML=final_sentence;
}
function sliced(){
    var line="What it is peanut butter in english?";
    var ext=line.slice(11,24);
    document.getElementById("section").innerHTML=ext;
}
function str_to_uc(){
    let text="Hello,World!";
    y=text.toUpperCase();
    document.getElementById("uppercase").innerHTML=y;
}
function search_f(){
    let text="My cat's name is garfield";
    let position=text.search("garfield");
    document.getElementById("find").innerHTML=position;
}
function number_to_string(){
    var H=999;
    document.getElementById("string_method").innerHTML=H.toString();
}
function precision(){
    var B=123.456789;
    document.getElementById("to_length").innerHTML=B.toPrecision(4);
}
function round_to(){
    var P=9.878;
    document.getElementById("to_fixed_decimal").innerHTML=P.toFixed(1);
}

function value_of(){
    var A=45;
    document.getElementById("primitive_value").innerHTML=A.valueOf();
}
