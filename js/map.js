const dataMap2023 =
    [
        {
            "code": 84,
            "labels": "Auvergne-Rhône-Alpes",
            "bornesRegions": 12119,
            "bornesVoitures": 15.8
        },
        {
            "code": 27,
            "labels": "Bourgogne-Franche-Comté",
            "bornesRegions": 4169,
            "bornesVoitures": 11.6
        },
        {
            "code": 53,
            "labels": "Bretagne",
            "bornesRegions": 4437,
            "bornesVoitures": 14.2
        },
        {
            "code": 24,
            "labels": "Centre-Val de Loire",
            "bornesRegions": 4439,
            "bornesVoitures": 11
        },
        {
            "code": 94,
            "labels": "Corse",
            "bornesRegions": 781,
            "bornesVoitures": 19.8
        },
        {
            "code": 44,
            "labels": "Grand Est",
            "bornesRegions": 9672,
            "bornesVoitures": 11.9
        },
        {
            "code": 32,
            "labels": "Hauts-de-France",
            "bornesRegions": 9399,
            "bornesVoitures": 11.7
        },
        {
            "code": 11,
            "labels": "Île-de-France",
            "bornesRegions": 19125,
            "bornesVoitures": 16.4
        },
        {
            "code": 28,
            "labels": "Normandie",
            "bornesRegions": 5704,
            "bornesVoitures": 11.7
        },
        {
            "code": 75,
            "labels": "Nouvelle-Aquitaine",
            "bornesRegions": 9924,
            "bornesVoitures": 12.7
        },
        {
            "code": 76,
            "labels": "Occitanie",
            "bornesRegions": 10154,
            "bornesVoitures": 10.7
        },
        {
            "code": 52,
            "labels": "Pays de la Loire",
            "bornesRegions": 5077,
            "bornesVoitures": 14.8
        },
        {
            "code": 93,
            "labels": "Provence-Alpes-Côte d'Azur",
            "bornesRegions": 9249,
            "bornesVoitures": 16.2
        }
    ]

const width = 700, height = 550;

const path = d3.geoPath();

const projection = d3.geoConicConformal() // Lambert-93
    .center([2.454071, 46.279229]) // Center on France
    .scale(2600)
    .translate([width / 2 - 50, height / 2]);

path.projection(projection);

const svg = d3.select('#map').append("svg")
    .attr("id", "svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "Blues");

const deps = svg.append("g");

var promises = [];
promises.push(d3.json('./js/regions.geojson'));
promises.push(dataMap2023);

Promise.all(promises).then(function (values) {
    const geojson = values[0];
    const data = values[1];

    var features = deps
        .selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr('id', d => "d" + d.properties.code)
        .attr("d", path);

    var quantile = d3.scaleQuantile()
        .domain([0, d3.max(data, e => +e.bornesVoitures)])
        .range(d3.range(9));

    var legend = svg.append('g')
        .attr('transform', 'translate(525, 150)')
        .attr('id', 'legend');

    legend.selectAll('.colorbar')
        .data(d3.range(9))
        .enter().append('svg:rect')
        .attr('y', d => d * 20 + 'px')
        .attr('height', '20px')
        .attr('width', '20px')
        .attr('x', '0px')
        .attr("class", d => "q" + d + "-9")

    var legendScale = d3.scaleLinear()
        .domain([d3.min(data, e => +e.bornesVoitures), d3.max(data, e => +e.bornesVoitures)])
        .range([0, 9 * 20]);

    var legendAxis = svg.append("g")
        .attr('transform', 'translate(550, 150)')
        .call(d3.axisRight(legendScale).ticks(6));

    data.forEach(function (e, i) {
        d3.select("#d" + e.code)
            .attr("class", d => "department q" + quantile(+e.bornesVoitures) + "-9")
            .on("mouseover", function (event, d) {
                //console.log(e)
                div.transition()
                    .duration(200)
                    .style("opacity", .9)
                    .style("display", "block");
                div.html("<b>Région : </b>" + e.labels + "<br>"
                    + "<b>Voitures par borne : </b>" + e.bornesVoitures + 
                    "<br>" + "<b>Nombre de points de recharge par région:</b> " + e.bornesRegions)
                    .style("left", (event.pageX + 30) + "px")
                    .style("top", (event.pageY - 30) + "px");
            })
            .on("mouseout", function (event, d) {
                div.style("opacity", 0);
                div.html("")
                    .style("left", "-500px")
                    .style("top", "-500px");
            });
    });
})

// Append a DIV for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "map-tooltip")
    .style("opacity", 0)
    .style("display", 'none');