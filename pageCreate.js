(function () {
    var fs = require('fs');
    var cheerio = require('cheerio');

    module.exports.indexHandle = function (url, res) {
        fs.readFile(url, function (err, file) {
            if (err)
                throw err;
            var $ = cheerio.load(file);
            res.send($.html());
        });
    };
}());

