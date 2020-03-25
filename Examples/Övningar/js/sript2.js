const formula = document.getElementById("formReg");
const output = document.getElementById("output");
const carModel = document.getElementById("bilModell");
const distance = document.getElementById("mil");
const milage = document.getElementById("milage");
const year = document.getElementById("year");

var forbrukning = 0;
var bensin = 0;
var mil = 0;

function showMilage(event) {

    mil = distance.value;
    bensin = milage.value;
    console.log("Värde på mil: "+ mil);
    console.log("Värde på bensin: "+ bensin);
    forbrukning = bensin * mil;
    console.log("Värde på forbrukning" + forbrukning);

    output.textContent = "Din " + carModel.value + " årsmodell " + year.value + " kommer dra " + (forbrukning) + " liter bränsle iår.";
    event.preventDefault();
}

formula.addEventListener("submit", showMilage, false);