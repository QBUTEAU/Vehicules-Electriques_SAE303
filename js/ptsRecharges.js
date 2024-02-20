const ptsRecharges = document.getElementById('ptsRecharges').getContext('2d');

        const chartData = {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '5 mai 2023'],
                datasets: [{
                    label: 'Nombre de points de recharge en France',
                    data: [14799, 20048, 24808, 28666, 32706, 53667, 82107, 100000],
                    borderWidth: 1,
                    backgroundColor: '#17CD0E',
                    borderColor: '#189212',
                    borderWidth: 2,
                    pointBackgroundColor: '#189212',
                    fill : true,
                    pointStyle: 'circle',
                    pointRadius: 4,
                }]
            },
            options: {
                scales: {
                    x: {
                      beginAtZero: true,
                      ticks: {
                        font: {
                          family: 'Outfit',
                          size: 9.5,
                        }
                      }
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                        font: {
                          family: 'Outfit',
                          size: 9,
                        }
                      }
                    }
                  },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                family: 'Outfit',
                            }
                        }},
                    title: {
                        display: true,
                        text: 'Evolution du nombre de points de recharge en France',
                        font:{
                            family: 'Outfit',
                            size: 20,
                        }
                    }
                }
            }
        };

        const ptsRechargeInstance = new Chart(ptsRecharges, chartData);

        const buttonRecharges = document.getElementById('previsionsRecharges');
        let showData = false;

        buttonRecharges.addEventListener('click', function() {
            if (showData) {
                chartData.data.labels = chartData.data.labels.slice(0, 8);
                chartData.data.datasets[0].data = chartData.data.datasets[0].data.slice(0, 8);
                chartData.data.datasets[0].label = 'Points de recharge en France';
                buttonRecharges.innerHTML = 'Afficher les prévisions 2024-2030';
                chartData.data.datasets[0].backgroundColor = '#17CD0E';
                chartData.data.datasets[0].borderColor = '#189212';
                chartData.data.datasets[0].pointBackgroundColor = '#189212';
            } else {
                chartData.data.labels = [...chartData.data.labels, '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
                chartData.data.datasets[0].data = [...chartData.data.datasets[0].data, 140000, 180000, 220000, 250000, 300000, 350000, 400000];
                chartData.data.datasets[0].label = 'Points de recharge actuels et prévisionels en France';
                buttonRecharges.innerHTML = 'Masquer les prévisions 2024-2030';
                chartData.data.datasets[0].backgroundColor = '#189212';
                chartData.data.datasets[0].borderColor = '#17CD0E';
                chartData.data.datasets[0].pointBackgroundColor = '#17CD0E';
            }
            ptsRechargeInstance.update();
            showData = !showData;
        });