// scripts/tools.js

export function initTools() {
    // Light-Year Distance Calculator
    const distanceCalculator = document.getElementById('distanceCalculator');
    const result = document.getElementById('result');

    if (distanceCalculator && result) {
        distanceCalculator.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const lightYearsInput = document.getElementById('lightYears').value;
            const lightYears = parseFloat(lightYearsInput);

            if (!isNaN(lightYears) && lightYears >= 0) {
                const kilometers = lightYears * 9.461e+12; 
                result.textContent = `${lightYears} light-year(s) is approximately ${kilometers.toExponential(2)} kilometers.`;
            } else {
                result.textContent = "Please enter a valid non-negative number.";
            }
        });
    } else {
        console.error('Distance calculator form or result element not found.');
    }

    // Contact Form Handling (Optional)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Implement form submission logic here (e.g., using EmailJS)
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
}
