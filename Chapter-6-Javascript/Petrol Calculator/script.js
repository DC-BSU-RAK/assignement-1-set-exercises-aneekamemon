



document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('Calculate');
    calculateBtn.addEventListener('click', calculate);
    
    // Optional: Calculate when inputs change
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener('change', calculate);
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