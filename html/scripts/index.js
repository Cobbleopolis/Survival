var supplies = [
    {
        name: "REI Durable Stuff Sack",
        price: "$7.50 – $11.50",
        link: "http://www.rei.com/product/862591/rei-durable-stuff-sack"
    }
];

$(window).on("load", function () {
    //console.log("Load");
    createSupplies();
});

function createSupplies() {
    html = '';
    for (var i = 0; i < supplies.length; i++) {
        html += '<div class="ui top attached segment">';
        html += '<p>' + supplies[i].name + '</p>';
    }
}
