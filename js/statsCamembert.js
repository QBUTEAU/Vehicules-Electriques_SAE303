const data = [
    {
        "date": "2011",
        "Diesel": "26 770 386",
        "Essence": "14 023 995",
        "Electrique": "5 857",
        "Gaz": "593 272",
        "Hybride_rechargeable": "17 734"
    },
    {
        "date": "2012",
        "Diesel": "27 764 425",
        "Essence": "13 733 187",
        "Electrique": "9 291",
        "Gaz": "236 624",
        "Hybride_rechargeable": "26 513"
    },
    {
        "date": "2013",
        "Diesel": "28 466 096",
        "Essence": "13 357 499",
        "Electrique": "17 457",
        "Gaz": "220 129",
        "Hybride_rechargeable": "29 738"
    },
    {
        "date": "2014",
        "Diesel": "29 091 956",
        "Essence": "13 193 933",
        "Electrique": "29 597",
        "Gaz": "213 325",
        "Hybride_rechargeable": "30 068"
    },
    {
        "date": "2015",
        "Diesel": "29 685 637",
        "Essence": "13 202 506",
        "Electrique": "41 935",
        "Gaz": "205 745",
        "Hybride_rechargeable": "31 520"
    },
    {
        "date": "2016",
        "Diesel": "30 099 017",
        "Essence": "13 399 974",
        "Electrique": "61 926",
        "Gaz": "200 088",
        "Hybride_rechargeable": "36 513"
    },
    {
        "date": "2017",
        "Diesel": "30 366 918",
        "Essence": "13 738 978",
        "Electrique": "86 384",
        "Gaz": "192 860",
        "Hybride_rechargeable": "43 026"
    },
    {
        "date": "2018",
        "Diesel": "30 439 541",
        "Essence": "14 260 364",
        "Electrique": "112 495",
        "Gaz": "187 245",
        "Hybride_rechargeable": "54 253"
    },
    {
        "date": "2019",
        "Diesel": "29 967 496",
        "Essence": "14 887 848",
        "Electrique": "142 863",
        "Gaz": "180 982",
        "Hybride_rechargeable": "68 007"
    },
    {
        "date": "2020",
        "Diesel": "29 353 976",
        "Essence": "15 605 708",
        "Electrique": "183 898",
        "Gaz": "175 445",
        "Hybride_rechargeable": "85 196"
    },
    {
        "date": "2021",
        "Diesel": "28 772 435",
        "Essence": "16 026 868",
        "Electrique": "295 116",
        "Gaz": "185 752",
        "Hybride_rechargeable": "158 541"
    },
    {
        "date": "2022",
        "Diesel": "28 148 730",
        "Essence": "16 583 422",
        "Electrique": "463 874",
        "Gaz": "231 085",
        "Hybride_rechargeable": "300 993"
    }
];

const tableBody = document.getElementById("table-body");

data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.date}</td>
        <td>${item.Diesel}</td>
        <td>${item.Essence}</td>
        <td><strong>${item.Electrique}</strong></td>
        <td>${item.Gaz}</td>
        <td>${item.Hybride_rechargeable}</td>
    `;
    tableBody.appendChild(row);
});