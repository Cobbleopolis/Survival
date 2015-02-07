var supplies = [
    {
        name: "VAUDE Sioux 400 Sleeping Bag - 2013 Closeout",
        price: 59.73,
        desc: "This warm, synthetic-insulation sleeping bag has a trim mummy cut that helps retain heat close to your body, right where you need it. It makes a great choice for summertime camping in mild climates.",
        link: "http://www.rei.com/product/884219/vaude-sioux-400-sleeping-bag-2013-closeout"
    },
    {
        name: "REI Camper First-Aid Kit",
        price: 79.50,
        desc: "A handy essential you can stow inside a vehicle, the REI Camper First-Aid Kit provides medical supplies for groups and families.",
        link: "http://www.rei.com/product/867434/rei-camper-first-aid-kit"
    }
];

$(window).on("load", function () {
    $("#map").width($("#map").parent().width());
    createSupplies();
});

function createSupplies() {
    html = '';
    for (var i = 0; i < supplies.length; i++) {
        html += '<div class="ui segment">';
        html += '<p><strong>' + supplies[i].name + '</strong></p>';
        html += '<div class="ui fitted divider"></div>';
        html += '<p>Description: ' + supplies[i].desc + '</p>';
        html += '<p>Price: $' + supplies[i].price + '</p>';
        html += '</div>';
    }
    $("#suppliesContent").html(html);
}
