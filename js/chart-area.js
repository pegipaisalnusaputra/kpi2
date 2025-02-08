// Ambil elemen canvas
var ctx = document.getElementById('kpiAreaChart').getContext('2d');

// Buat area chart dengan data KPI selama 6 bulan untuk 5 karyawan terbaik
var myChart = new Chart(ctx, {
    type: 'line', // Menggunakan line chart dengan fill untuk area chart
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Label bulan
        datasets: [
            {
                label: 'Ahmad',
                data: [0.85, 0.88, 0.90, 0.92, 0.89, 0.91], // Data KPI Ahmad per bulan
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Warna area transparan
                borderColor: 'rgba(255, 99, 132, 1)', // Warna garis
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Budi',
                data: [0.82, 0.84, 0.86, 0.89, 0.87, 0.90], // Data KPI Budi
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Citra',
                data: [0.80, 0.82, 0.84, 0.86, 0.85, 0.88], // Data KPI Citra
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Dian',
                data: [0.83, 0.85, 0.87, 0.88, 0.87, 0.89], // Data KPI Dian
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: true
            },
            {
                label: 'Eko',
                data: [0.81, 0.83, 0.85, 0.87, 0.86, 0.88], // Data KPI Eko
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1, // Skala KPI 0 - 1
                title: {
                    display: true,
                    text: 'KPI Score'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        }
    }
});
