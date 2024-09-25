// visualizations.js

async function initVisualizations() {
    const stats = await fetchAstronomyStats();

    const ctx = document.getElementById('statsChart').getContext('2d');
    const statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stats.years,
            datasets: [{
                label: 'Number of Discoveries',
                data: stats.discoveries,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}