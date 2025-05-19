export function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May' , 'June' ,'July', 'August', 'September', 'October', 'November', 'December'], 
            datasets: [{
                label: 'Monthly Sales',
                data: [1, 7, 7, 3, 12, 15, 5, 12, 14, 9, 12, 19],
                borderColor: 'green',
                borderWidth: 2,
                fill: false
            }]
    
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

}