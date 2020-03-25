const form = document.getElementById("formReg");
//const date = new Date();
var time;
var month;
var greeting;
var timeGreeting;

function funcGreet(event) {
    date = new Date(document.getElementById("datePicker").value);
    month = date.getMonth();
    console.log("Month har värdet: " + month);
    time = date.getHours();
    console.log("Time har värdet: " + time);

    if (time >= 5 && time <= 11)
        timeGreeting = "Godmorgon";
    else if (time >= 12 && time <= 17)
        timeGreeting = "God eftermiddag";
    else if (time >= 18 && time <= 22)
        timeGreeting = "God kväll";
    else {
        timeGreeting = "Godnatt!";
    }

    if (month >= 2 && month < 5)
        greeting = "Vår";
    else if (month >= 5 && month <= 7)
        greeting = "Sommar";
    else if (month >= 8 && month < 10)
        greeting = "Höst";
    else {
        greeting = "Vinter";
    }

    document.getElementById("greeting").innerHTML = timeGreeting + "! Nu är det " + greeting;
    event.preventDefault();
}



form.addEventListener("submit", funcGreet, false);