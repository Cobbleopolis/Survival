(function () {
    var fs = require('fs');
    var cheerio = require('cheerio');

    var navBar = fs.readFileSync(__dirname + '/html/resorcePages/navBar.html');
    var navButton = fs.readFileSync(__dirname + '/html/resorcePages/navButton.html');

    module.exports.indexHandle = function (url, res) {
        fs.readFile(url, function (err, file) {
            if (err)
                throw err;
            var $ = cheerio.load(file);
            $('#navBar').html(navBar);
            $('#navButton').html(navButton);
            res.send($.html());
        });
    };
}());

