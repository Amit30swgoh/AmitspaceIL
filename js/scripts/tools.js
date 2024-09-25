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

            if (!isNaN(lightYears)) {
                const kilometers = lightYears * 9.461e+12; 
                result.textContent = `${lightYears} light-years is approximately ${kilometers.toExponential(2)} kilometers.`;
            } else {
                result.textContent = "Please enter a valid number.";
            }
        });
    } else {
        console.error('Distance calculator form or result element not found.');
    }

    // Contact Form Handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Replace these values with your EmailJS service ID and template ID
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, (err) => {
                    alert('Failed to send message. Please try again.');
                    console.error('EmailJS Error:', err);
                });
        });
    }
}
