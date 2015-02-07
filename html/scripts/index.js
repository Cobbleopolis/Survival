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
    },
    {
        name: "USGI Trip / Snare Wire 160' Vietnam Era Emergency Survival",
        price: 13.48,
        desc: "Snare trip wire.",
        link: "http://www.amazon.com/USGI-Snare-Vietnam-Emergency-Survival/dp/B006GWTJIU",
        linkName: "Amazon"
    },
    {
        name: "Leatherman Squirt PS4 Multitool",
        price: 29.95,
        desc: "The tough and functional Leatherman Squirt PS4 multi-tool combines the best of both worlds with its spring-action pliers and scissors.",
        link: "http://www.rei.com/product/802322/leatherman-squirt-ps4-multitool",
        linkName: "REI"
    },
    {
        name: "Wetterlings Backcountry Axe",
        price: 129.00,
        desc: "This lightweight axe has a long handle that can be use 1- or 2-handed, making it great for limbing, cutting smaller trees and chopping firewood at home or around your campsite.",
        link: "http://www.rei.com/product/883917/wetterlings-backcountry-axe",
        linkName: "REI"
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
