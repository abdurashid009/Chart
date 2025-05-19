export function createBarChart() {
     const ctx = document.getElementById('myBarChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
                datasets: [{
                    label: 'Savdo miqdori (ming so\'m)',
                    data: [120, 90, 150, 130, 110],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
}