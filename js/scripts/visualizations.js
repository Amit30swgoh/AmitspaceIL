// scripts/visualizations.js
import { fetchAstronomyStats } from './data.js';

export async function initVisualizations() {
    const astronomyStats = await fetchAstronomyStats();

    if (!astronomyStats) {
        console.error('Astronomy statistics data not available.');
        return;
    }

    const statsChartElement = document.getElementById('statsChart');

    if (!statsChartElement) {
        console.error('Canvas element with id "statsChart" not found.');
        return;
    }

    const ctx = statsChartElement.getContext('2d');
    const statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: astronomyStats.years,
            datasets: [{
                label: 'Number of Discoveries',
                data: astronomyStats.discoveries,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Astronomical Discoveries Over Years'
                }
            },
            scales: {
                y: { 
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Discoveries'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}
