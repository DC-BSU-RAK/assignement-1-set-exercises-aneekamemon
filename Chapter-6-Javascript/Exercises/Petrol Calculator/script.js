



document.addEventListener('DOMContentLoaded', () => {
    const total = document.getElementById('Calculate');
    total.addEventListener('click', calculate);
    
    const inputs = document.querySelectorAll("input");
    inputs.forEach(amount => {
        amount.addEventListener('dif', calculate);
    });
});

function calculate() {

    const petrolPrice = parseFloat(document.getElementById('cost').value);
    const litres = parseFloat(document.getElementById('litre').value);

    if (isNaN(petrolPrice), isNaN(litres)) {
        document.getElementById('result').innerText = "Enter a correct value";
        return;
    }

    const total = petrolPrice * litres;
    document.getElementById('result').innerText = `Total: ${total.toFixed(2)} Dollars`;
}