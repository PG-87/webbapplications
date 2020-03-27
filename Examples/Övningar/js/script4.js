const form = document.getElementById("form");
var output;

function showResult(event) {

    var input1 = document.getElementById("input").value;
    input = input1.toUpperCase();
    console.log("I FUNC: Input har värdet: " + input);
    switch (input) {
        case "K":
            output = "Varmt kaffe!";
            break;
        case "T":
            output = "Varmt Te!";
            break;
        default:
            output = "Du måste skriva K eller T!";
    }
    document.getElementById("output").innerHTML = "Varsegod: " + output;
    event.preventDefault();
}

form.addEventListener("submit", showResult, false);
