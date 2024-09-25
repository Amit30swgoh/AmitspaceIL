// map.js
export function initMap() {
    const map = L.map('map').setView([0, 0], 2); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([29.7604, -95.3698]).addTo(map) 
        .bindPopup('Huntsville, Home to NASA\'s JWST operations')
        .openPopup();
}