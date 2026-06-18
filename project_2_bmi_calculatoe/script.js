const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = 'Please enter valid positive numbers for height and weight.';
        result.style.display = 'block';
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML = `Your BMI is <span>${bmi}</span>`;
        result.style.display = 'block';
        if (bmi < 18.5) {
            result.innerHTML += ' (Underweight)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML += ' (Normal weight)';
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML += ' (Overweight)';
        } else {
            result.innerHTML += ' (Obesity)';
        }
    }
});