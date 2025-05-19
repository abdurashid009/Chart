export function createHorizChart() {
    const ctx = document.getElementById('myHorizontalBarChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
                datasets: [
                    {
                        label: '2024',
                        data: [100, 85, 130, 120, 95],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '2025',
                        data: [-120, -90, -150, -130, -110, 120, 90, 150, 130, 110],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
}