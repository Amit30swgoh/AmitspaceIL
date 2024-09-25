// data.js

// Example: Fetching JWST mission data
async function fetchJWSTData() {
    try {
        const response = await fetch('assets/data/jwst-data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JWST data:', error);
    }
}

// Example: Fetching astronomical statistics
async function fetchAstronomyStats() {
    try {
        const response = await fetch('assets/data/astronomy-stats.json');
        const stats = await response.json();
        return stats;
    } catch (error) {
        console.error('Error fetching astronomy statistics:', error);
    }
}