const elForm = document.getElementById('formReg');
const elName = document.getElementById('txtName');
const elOutput = document.getElementById('output');

function showName(event){
	// Använd value när man hämtar från input i formuläret
	let name = elName.value;

	console.log("Textfält i funktion" + name);

	elOutput.textContent = 'Hej ' + name;

    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', showName, false);