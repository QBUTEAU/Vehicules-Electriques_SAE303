import dataJson from './parcAutoPA.json' assert { type: 'json' }

var i = 0;

Pourcentage(i);

const data = {
    labels: ['Diesel', 'Essence', 'Électrique', 'Gaz', 'Hybride rechargable'],
    datasets: [{
        data: [dataJson[i].Diesel, dataJson[i].Essence, dataJson[i].Electrique, dataJson[i].Gaz, dataJson[i].Hybride_rechargeable],
        backgroundColor: ['#FF9F33', '#39C20E', '#EB1212', '#1484F3', '#000000'],
    }],
};


const ctx = document.getElementById('camembertChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Outfit', // Définir le style de police pour les libellés
                        size: 12 // Modifier la taille de la police selon vos besoins
                    }
                }
            },
            title: {
                display: true,
                text: 'Répartition du parc automobile par carburant en : ' + dataJson[i].date,
                font: {
                    family: 'Outfit',
                    size: 20
                }
            },
        },
    },
});

document.getElementById('year-select').addEventListener('change', (event) => {
    i = parseInt(event.target.value);

    Pourcentage(i);

    chart.data.datasets[0].data = [
        dataJson[i].Diesel,
        dataJson[i].Essence,
        dataJson[i].Electrique,
        dataJson[i].Gaz,
        dataJson[i].Hybride_rechargeable
    ];

    chart.options.plugins.title.text = 'Répartition du parc automobile par carburant en : ' + dataJson[i].date;

    chart.update();
});

function Pourcentage(i) {
    const moy = [];
    const carb = ["Diesel", "Essence", "Electrique", "Gaz", "Hybride_rechargeable"];

    let totalCarburant = 0;
    for (let c = 0; c < carb.length; c++) {
        totalCarburant += dataJson[i][carb[c]];
    }
    const percentages = {};
    for (let c = 0; c < carb.length; c++) {
        percentages[carb[c]] = (dataJson[i][carb[c]] * 100) / totalCarburant;
        document.querySelector(`#${carb[c]} span`).innerText = percentages[carb[c]].toFixed(2);
    }
}