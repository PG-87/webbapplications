const form = document.getElementById("form");
var input;
var far;
var cel;

function convert(event) {
    console.log("convert startad!");
    var output;
    input = document.getElementById("numb").value;
    console.log("input type: " + input);
    if (isNaN(input)) {
        output = "asda";
    }
    else {
        output = "need to be a number!";
    }
    document.getElementById("output").innerHTML = output;
    event.preventDefault();
}

form.addEventListener("submit", convert, false);