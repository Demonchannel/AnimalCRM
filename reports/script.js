document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('profitChart').getContext('2d');
    const weeklyCtx = document.getElementById('weeklyProfitChart').getContext('2d');

    const profitChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [{
                label: 'Прибыль',
                data: [500, 600, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700],
                borderColor: '#5aa7a7',
                fill: false
            }, {
                label: 'Расход',
                data: [300, 400, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500],
                borderColor: '#ff6b6b',
                fill: false
            }, {
                label: 'Доход',
                data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
                borderColor: '#4bc0c0',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Месяц'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Сумма ($)'
                    },
                    beginAtZero: true
                }
            }
        }
    });

    const weeklyProfitChart = new Chart(weeklyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Возврат залога', 'Обслуживание номеров', 'Выплаты зарплат'],
            datasets: [{
                data: [1250, 302, 960],
                backgroundColor: ['#5aa7a7', '#4bc0c0', '#ffcd56'],
                hoverBackgroundColor: ['#4a8e8e', '#36a2eb', '#ff9f40']
            }]
        },
        options: {
            responsive: true
        }
    });

    const chartButtons = document.querySelectorAll('.chart-button');
    chartButtons.forEach(button => {
        button.addEventListener('click', () => {
            chartButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Update chart data based on selected timeframe
        });
    });
});
