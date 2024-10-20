// Select the form
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = "Enter valid Height.";
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Enter valid Weight";
    } else {
        const ans = (weight / ( (height * height) / 100)) .toFixed(2);
        result.innerHTML = `<span>${ans}</span>`
    }
 
})