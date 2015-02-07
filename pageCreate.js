(function () {
    var fs = require('fs');
    var cheerio = require('cheerio');

    module.exports.indexHandle = function (url, res) {
        console.log("Handle");
        fs.readFile(url, function (err, file) {
            if (err)
                throw err;
            console.log("File");
            var $ = cheerio.load(file);
            console.log("Load");
            res.send($.html());
        });
    };
}());

