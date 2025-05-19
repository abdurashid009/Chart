export function createPolarChart() {
     const ctx = document.getElementById('polarAreaChart').getContext('2d');
        const polarAreaChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Mahsulot A', 'Mahsulot B', 'Mahsulot C', 'Mahsulot D', 'Mahsulot E'],
                datasets: [{
                    label: 'Savdo hajmi',
                    data: [120, 90, 150, 70, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    title: {
                        display: true,
                        text: 'Mahsulotlar bo‘yicha savdo (ming so‘m)'
                    }
                }
            }
        });
}