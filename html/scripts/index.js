var supplies = [
    {
        name: "VAUDE Sioux 400 Sleeping Bag - 2013 Closeout",
        price: 59.73,
        desc: "This warm, synthetic-insulation sleeping bag has a trim mummy cut that helps retain heat close to your body, right where you need it. It makes a great choice for summertime camping in mild climates.",
        link: "http://www.rei.com/product/884219/vaude-sioux-400-sleeping-bag-2013-closeout",
        linkName: "REI"
    },
    {
        name: "REI Camper First-Aid Kit",
        price: 79.50,
        desc: "A handy essential you can stow inside a vehicle, the REI Camper First-Aid Kit provides medical supplies for groups and families.",
        link: "http://www.rei.com/product/867434/rei-camper-first-aid-kit",
        linkName: "REI"
    },
    {
        name: "KOR Nava BPA Free 650ml Filter Water Bottle",
        price: 21.95,
        desc: "See site for details.",
        link: "http://www.amazon.com/KOR-650ml-Filter-Water-Bottle/dp/B00FUANGRY/ref=sr_1_1?ie=UTF8&qid=1423276341&sr=8-1&keywords=KOR+Nava+BPA+Free+650ml+Filter+Water+Bottle%2C+White%2FBlue",
        linkName: "Amazon"
    }
];

$(window).on("load", function () {
    $("#map").width($("#map").parent().width());
    createSupplies();
});

function createSupplies() {
    html = '';
    cost = 0;
    for (var i = 0; i < supplies.length; i++) {
        html += '<div class="ui segment">';
        html += '<p><strong>' + supplies[i].name + '</strong></p>';
        html += '<div class="ui fitted inverted divider"></div>';
        html += '<p class="suppliesDesc">Description: ' + supplies[i].desc + '</p>';
        html += '<p class="suppliesPrice">Price: $' + supplies[i].price + '</p>';
        html += '<div class="ui fitted inverted divider"></div>';
        html += '<p class="suppliesPrice">Buy/View: <a href="' + supplies[i].link + '">' + supplies[i].linkName + '</a></p>';
        html += '</div>';
        cost += supplies[i].price;
        //console.log(cost);
    }
    html += '<div class="ui fitted inverted divider"></div>';
    html += '<p class="suppliesTotalPrice">Total Price: $' + Math.round(cost * 100) / 100 + '</p>';

    $("#suppliesContent").html(html);
}
