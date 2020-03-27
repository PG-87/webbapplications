const form = document.getElementById("form");

function chooseName() {
    let name = document.getElementById("name").value;
    localStorage.setItem("username", name);
    alert("Tack så mycket!");
    window.open("index.html");
    window.close();
}

form.addEventListener("submit", chooseName, false);