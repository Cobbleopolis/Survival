(function () {
    var fs = require('fs');
    var cheerio = require('cheerio');

    module.exports.indexHandle = function (url, res) {
        console("Handle");
        fs.readFile(url, function (err, file) {
            if (err)
                throw err;
            console("File");
            var $ = cheerio.load(file);
            console("Load");
            res.send($.html());
        });
    };
}());

