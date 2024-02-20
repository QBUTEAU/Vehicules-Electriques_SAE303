import dataJson from './parcAutoPA.json' assert { type: 'json' }

const parAutoElec = new Chart(
    document.getElementById('parcAutoElecGraph'),
    {
        type: 'line',
        data: {
            labels: dataJson.map(element => element.date),
            datasets: [
                {
                    label: 'Véhicules 100% électriques',
                    backgroundColor: '#EB1212',
                    borderColor: '#961616',
                    data: dataJson.map(element => element.Electrique),
                },
            ],

        },

        options: {
            responsive: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
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
                    text: 'Evolution du parc automobile électrique en France',
                    font:{
                        family: 'Outfit',
                        size: 20,
                    }
                }
            }
        },
    }
);

const btn = document.getElementById('parcAuto')
const graph = document.querySelector('.parcAutoElec');
const camembert = document.querySelector('.graphiqueEvoParcAutoFr');
const stats = document.querySelector('.stats-camembert');

graph.style.display = 'none'

btn.addEventListener('click', () => {
    
    if ( graph.style.display == 'none') {
        graph.style.display = 'block';
        camembert.style.display = 'none';
        stats.style.display = 'none';
        btn.innerHTML = 'Parc automobile par carburant';
    } else {
        graph.style.display = 'none';
        camembert.style.display = 'block';
        stats.style.display = 'flex';
        btn.innerHTML = 'Parc automobile 100% électrique';
    }
});