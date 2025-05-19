export function createStackedChart() {
     const ctx = document.getElementById('stackedBarChart').getContext('2d');
        const stackedBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
                datasets: [
                    {
                        label: 'Mahsulot A',
                        data: [50, 40, 60, 55, 45],
                        backgroundColor: 'rgba(75, 192, 192, 0.7)'
                    },
                    {
                        label: 'Mahsulot B',
                        data: [30, 25, 40, 35, 30],
                        backgroundColor: 'rgba(255, 159, 64, 0.7)'
                    },
                    {
                        label: 'Mahsulot C',
                        data: [20, 15, 30, 25, 35],
                        backgroundColor: 'rgba(153, 102, 255, 0.7)'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Oylik Savdo (Stacked Bar Chart)'
                    }
                },
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Savdo miqdori (ming so‘m)'
                        }
                    }
                }
            }
        });
}