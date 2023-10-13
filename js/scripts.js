var spec1 = "js/choropleth.vg.json";
vegaEmbed("#choropleth", spec1, {actions: false})
    .then(function(result) {
}).catch(console.error);

var spec2 = "js/rank.vg.json";
vegaEmbed("#rank", spec2, {actions: false})
    .then(function(result) {
}).catch(console.error);

var spec3 = "js/scatter.vg.json";
vegaEmbed("#scatter", spec3, {actions: false})
    .then(function(result) {
}).catch(console.error);

var spec4 = "js/multiple_line.vg.json";
vegaEmbed("#multiple_line", spec4, {actions: false})
    .then(function(result) {
}).catch(console.error);

var spec5 = "js/line.vg.json";
vegaEmbed("#line", spec5, {actions: false})
    .then(function(result) {
}).catch(console.error);