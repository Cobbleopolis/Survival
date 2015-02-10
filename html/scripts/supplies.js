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
    },
    {
        name: "Best Glide Survival Gill Net",
        price: 24.99,
        desc: "Best Glide Survival Gill Net is a 12’ x 4’ Emergency Gill Net. Used by stretching it across a stream or pond to catch fish or bait, it is not to be used for recreational fishing. The Best Glide Emergency Gill Net is constructed to be effective and versatile! The leaded foot (bottom) rope of the gill net acts as the weight to sink the net and the top rope is made of polypropylene that floats. It includes a mesh storage bag.",
        link: "http://www.onlinesports.com/best-glide-survival-gill-net.html?srcid=frgl&utm_source=froogle&utm_medium=cpc&utm_term=ASE-FG1151&cm_mmc=Froogle-_-Products-_-PPC-_-ASE-FG1151&gclid=Cj0KEQiA6dGmBRC_3Mi-x_XywKsBEiQA1lcFP1LQ5gyhz7FFkzWBa46Qv1XuFIwlnqYgqXRSoGdrKBQaAswZ8P8HAQ",
        linkName: "OnlineSports"
    },
    {
        name: "Coleman Cast Iron Skillet, 10-Inch",
        price: 15.42,
        desc: "See site for details.",
        link: "http://www.amazon.com/Coleman-Cast-Iron-Skillet-10-Inch/dp/B00AU6JL2W/ref=sr_1_7?s=outdoor-recreation&ie=UTF8&qid=1423587735&sr=1-7",
        linkName: "Amazon"
    },
    {
        name: "Maine Trees & Wildflowers",
        price: 4.63,
        desc: "This copiously illustrated guide discusses more than 140 species of trees, shrubs and wildflowers found in Maine and includes a map featuring prominent, state-wide botanical sanctuaries. Laminated for durability, this useful reference is a great source of portable information and ideal for field use by novices and experts alike.<br><br><b class='notice'>If you are going some place other than Maine you will want to get a botanical guide for that area! Prices may very.</b>",
        link: "http://www.walmart.com/ip/8201672?wmlspartner=wlpa&adid=22222222227019787751&wl0=&wl1=g&wl2=c&wl3=53114855808&wl4=&wl5=pla&wl6=75200194608&veh=sem",
        linkName: "Walmart"
    }
];

$(window).on("load", function () {
    createSupplies();
});

function createSupplies() {
    var html = '';
    var cost = 0;
    for (var i = 0; i < supplies.length; i++) {
        html += '<div class="ui segment">';
        html += '<p><strong>' + supplies[i].name + '</strong></p>';
        html += '<div class="ui fitted inverted divider"></div>';
        html += '<p class="suppliesDesc">Description: ' + supplies[i].desc + '</p>';
        html += '<p class="suppliesPrice">Price: $' + supplies[i].price + '</p>';
        html += '<div class="ui fitted inverted divider"></div>';
        html += '<p class="suppliesBuyView">Buy/View: <a href="' + supplies[i].link + '">' + supplies[i].linkName + '</a></p>';
        html += '</div>';
        cost += supplies[i].price;
        //console.log(cost);
    }
    html += '<div class="ui fitted inverted divider"></div>';
    html += '<p class="suppliesTotalPrice">Total Price: $' + Math.round(cost * 100) / 100 + '</p>';

    $("#suppliesContent").html(html);
}

