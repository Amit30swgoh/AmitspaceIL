// scripts/map.js

export function initMap() {
    const mapElement = document.getElementById('map');

    if (!mapElement) {
        console.error('Map element with id "map" not found.');
        return;
    }

    // Initialize the map centered at (0,0) with zoom level 2
    const map = L.map('map').setView([0, 0], 2); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for Huntsville, Texas
    L.marker([29.7604, -95.3698]).addTo(map) 
        .bindPopup('Huntsville, Home to NASA\'s JWST operations')
        .openPopup();
}
