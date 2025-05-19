export function createDougChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
        const doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Mahsulot A', 'Mahsulot B', 'Mahsulot C', 'Mahsulot D'],
                datasets: [{
                    label: 'Bozor ulushi (%)',
                    data: [35, 15, 20, 36, 26, 16, 5,7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(122, 255, 99, 0.7)',
                        'rgba(54, 96, 235, 0.7)',
                        'rgba(255, 183, 0, 0.7)',
                        'rgba(255, 0, 0, 0.7)'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Mahsulotlar bo‘yicha bozor ulushi'
                    }
                }
            }
        });
}