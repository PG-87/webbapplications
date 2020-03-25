const elForm = document.getElementById("formReg");
const elApple = document.getElementById("apple");
const elBanan = document.getElementById("bananer");
const elOutput = document.getElementById("output");
const elOutputApple = document.getElementById("outputApple");
const elOutputBananer = document.getElementById("outputBananer");

var totalSum = 0;
var totalApple = 0;
var totalBananer = 0;

function showKostnad(event) {

    let antalApple = elApple.value;
    let antalBananer = elBanan.value;
    let sumApple = 10 * antalApple;
    let sumBananer = 15 * antalBananer;

    totalApple = (totalApple + antalApple);
    totalBananer = (totalBananer + antalBananer);
    totalSum = totalSum + (sumApple + sumBananer);
    elOutput.textContent = "Total Summa: " + totalSum;
    elOutputApple.textContent = "Antal Äpplen: " + totalApple;
    elOutputBananer.textContent = "Antal Bananer: " + totalBananer;

    event.preventDefault();
}

elForm.addEventListener("submit", showKostnad, false);
