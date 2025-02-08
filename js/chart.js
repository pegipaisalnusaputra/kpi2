// Ambil elemen canvas
var ctx = document.getElementById('kpiBarChart').getContext('2d');

// Buat bar chart dengan data KPI
var myChart = new Chart(ctx, {
    type: 'bar', // Jenis grafik
    data: {
        labels: ['Ahmad', 'Budi', 'Citra', 'Dian', 'Eko', 'Fajar', 'Gita', 'Hadi', 'Indra', 'Joko'],
        datasets: [{
            label: 'Final Score',
            data: [0.905, 0.872, 0.890, 0.902, 0.885, 0.870, 0.892, 0.878, 0.915, 0.860],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(46, 204, 113, 0.6)',
                'rgba(231, 76, 60, 0.6)',
                'rgba(241, 196, 15, 0.6)',
                'rgba(52, 152, 219, 0.6)'
            ],
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 1
            }
        }
    }
});