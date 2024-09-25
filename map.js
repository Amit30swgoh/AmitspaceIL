// scripts/map.js

export function initMap() {
    const mapElement = document.getElementById('map');

    if (!mapElement) {
        console.error('Map element with id "map" not found.');
        return;
    }

    // Initialize the map centered at (29.7604, -95.3698) - Huntsville, Texas
    const map = L.map('map').setView([29.7604, -95.3698], 10); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for Huntsville, Texas
    L.marker([29.7604, -95.3698]).addTo(map) 
        .bindPopup('Huntsville, Home to NASA\'s JWST operations')
        .openPopup();
}
