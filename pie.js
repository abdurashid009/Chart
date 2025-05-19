export function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Mahsulot A', 'Mahsulot B', 'Mahsulot C', 'Mahsulot D'],
                datasets: [{
                    label: 'Bozor ulushi (%)',
                    data: [40, 30, 20, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: '#ffffff',
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