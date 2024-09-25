// tools.js

function initTools() {
    // Example: Interactive tool for calculating light-year distances
    const form = document.getElementById('distanceCalculator');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const lightYears = parseFloat(document.getElementById('lightYears').value);
        const kilometers = lightYears * 9.461e+12;
        document.getElementById('result').innerText = `${lightYears} light-years is approximately ${kilometers.toExponential()} kilometers.`;
    });
}