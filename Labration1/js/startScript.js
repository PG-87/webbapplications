const form = document.getElementById("form");

function chooseName() {
    let name = document.getElementById("name").value;
    if(name == ""){
        console.log("Namn var tomt!");
        alert("Du måste fylla i ditt namn!");
        return false
    }
    else if (isNaN(name)) {
    localStorage.setItem("username", name);
    console.log("Namn var korrekt ifyllt");
    alert("Tack så mycket!");
    window.open("index.html");
    console.log("index.html öppnas");
    window.close();

    }
    else {
        alert("Ditt namn kan inte vara ett nummer!");
        console.log("Namn var ett nummer");
        return false
    }
}

form.addEventListener("submit", chooseName, false);