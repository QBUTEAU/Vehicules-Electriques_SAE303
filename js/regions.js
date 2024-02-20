
const bornesRegions = document.getElementById('bornesRegions').getContext('2d');
const bornesVoitures = document.getElementById('ratioBornesVoitures').getContext('2d');

const data2021 = {
    labels: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"],
    bornesRegions: [4787, 1616, 1942, 1763, 293, 3639, 3568, 4905, 2446, 3915, 4044, 2046, 3502],
    bornesVoitures: [18.3, 12.2, 13.5, 12.2, 20.9, 15.5, 12, 16.2, 12.2, 14.3, 9.4, 16.1, 15.7]
};

const data2023 = {
    labels: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"],
    bornesRegions: [12119, 4169, 4437, 4439, 781, 9672, 9399, 19125, 5704, 9924, 10154, 5077, 9249],
    bornesVoitures: [15.8, 11.6, 14.2, 11, 19.8, 11.9, 11.7, 16.4, 11.7, 12.7, 10.7, 14.8, 16.2],
};

let showData2021 = true;

const bornesApres = document.getElementById('bornesApres');
bornesApres.addEventListener('click', updateCharts);

// Créer les graphiques avec les données de 2021
const bornesRegionsInstance = new Chart(bornesRegions, {
    type: 'bar',
    data: {
        labels: data2021.labels,
        datasets: [{
            label: 'Points de recharge en 2021',
            data: data2021.bornesRegions,
            backgroundColor: '#13AFCF',
            borderColor: '#0D6E9E',
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                  font: {
                    family: 'Outfit', // Police pour les valeurs de l'axe X
                    size: 9
                  }
                }
              },
              y: {
                beginAtZero: true,
                suggestedMax : 20000,
                ticks: {
                  font: {
                    family: 'Outfit', // Police pour les valeurs de l'axe Y
                    size: 9
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
                }
              },
            title: {
                display: true,
                text: 'Nombre de points de recharge par région',
                font:{
                    size: 20,
                    family: 'Outfit'
                }
            }
        }
    }
});

const bornesVoituresInstance = new Chart(bornesVoitures, {
    type: 'bar',
    data: {
        labels: data2021.labels,
        datasets: [{
            label: 'Voitures par borne en 2021',
            data: data2021.bornesVoitures,
            backgroundColor: '#0FE9C1',
            borderColor: '#109A66',
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                  font: {
                    family: 'Outfit', // Police pour les valeurs de l'axe X
                    size: 9
                  }
                }
              },
              y: {
                beginAtZero: true,
                suggestedMax : 25,
                ticks: {
                  font: {
                    family: 'Outfit', // Police pour les valeurs de l'axe Y
                    size: 9
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
                }
              },
            title: {
                display: true,
                text: 'Nombre de voiture par borne par région',
                font:{
                    size: 20,
                    family: 'Outfit'
                }
            }
        }
    }
});

function updateCharts() {
  if (bornesRegionsInstance.data.datasets[0].data == data2023.bornesRegions) {
    bornesRegionsInstance.data.datasets[0].data = data2021.bornesRegions
    bornesRegionsInstance.data.datasets[0].label = 'Points de recharge en 2021';
    bornesRegionsInstance.data.datasets[0].backgroundColor = '#13AFCF';
    bornesRegionsInstance.update();
    bornesApres.innerHTML = 'Statistiques en septembre 2023';
  } else {
    bornesRegionsInstance.data.datasets[0].data = data2023.bornesRegions
    bornesRegionsInstance.data.datasets[0].label = 'Points de recharge en septembre 2023';
    bornesRegionsInstance.data.datasets[0].backgroundColor = '#0D6E9E';
    bornesRegionsInstance.update();
    bornesApres.innerHTML = 'Statistiques en 2021';
  }

  if (bornesVoituresInstance.data.datasets[0].data == data2023.bornesVoitures) {
    bornesVoituresInstance.data.datasets[0].data = data2021.bornesVoitures
    bornesVoituresInstance.data.datasets[0].label = 'Voitures par borne en 2021';
    bornesVoituresInstance.data.datasets[0].backgroundColor = '#0FE9C1';
    bornesVoituresInstance.update();
  } else {
    bornesVoituresInstance.data.datasets[0].data = data2023.bornesVoitures;
    bornesVoituresInstance.data.datasets[0].label = 'Voitures par borne en septembre 2023';
    bornesVoituresInstance.data.datasets[0].backgroundColor = '#109A66';
    bornesVoituresInstance.update();
  }
}


// ------------------------------------------------------------------------------------------------ //

