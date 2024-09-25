// scripts/data.js

// Function to fetch JWST mission data
async function fetchJWSTData() {
    try {
        const response = await fetch('assets/data/jwst-data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JWST data:', error);
        return null;
    }
}

// Function to fetch astronomy statistics
async function fetchAstronomyStats() {
    try {
        const response = await fetch('assets/data/astronomy-stats.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching astronomy statistics:', error);
        return null;
    }
}

export { fetchJWSTData, fetchAstronomyStats };
