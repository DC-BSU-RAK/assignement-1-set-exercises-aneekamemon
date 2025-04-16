


    // Waits for the DOM to be fully loaded before the code starts
document.addEventListener('DOMContentLoaded', () => {
    const total = document.getElementById('Calculate');
    total.addEventListener('click', calculate);
    // EventLister set to click so that the result is
    //  shown once the user clicks on the button

    const inputs = document.querySelectorAll("input");
    inputs.forEach(amount => {
        amount.addEventListener('dif', calculate);
    });
});


// This function calculates the total cost which is the petrolPrice multipled by 
// the amount of litres inputted
function calculate() {

    const petrolPrice = parseFloat(document.getElementById('cost').value);
    const litres = parseFloat(document.getElementById('litre').value);

    if (isNaN(petrolPrice), isNaN(litres)) {
        document.getElementById('result').innerText = "Enter a correct value";
        return;
    }
// This checks whether or not the figures given are actual numbers
    const total = petrolPrice * litres;
    document.getElementById('result').innerText = `Total: ${total.toFixed(2)} Dollars`;
}

// This showcases the result with 2 decimal places, in the Dollar currency. 