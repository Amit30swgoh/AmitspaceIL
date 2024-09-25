// tools.js
export function initTools() {
    const distanceCalculator = document.getElementById('distanceCalculator');
    const result = document.getElementById('result');

    distanceCalculator.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const lightYears = parseFloat(document.getElementById('lightYears').value);

        if (!isNaN(lightYears)) {
            const kilometers = lightYears * 9.461e+12; 
            result.textContent = `${lightYears} light-years is approximately ${kilometers.toExponential(2)} kilometers.`;
        } else {
            result.textContent = "Please enter a valid number.";
        }
    });

    // Add more tool initializations here as needed
}
