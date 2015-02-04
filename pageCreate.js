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

            //fs.readdir(__dirname + '/html/images/slideshow/', function (err, files) {
            //    var html = '';
            //    if (err)
            //        throw err;
            //    for (var i = 0; i < files.length; i++) {
            //        html += '<div align="center" class="slideshow_div"><img class="slideshow_img" src="images/slideshow/' + files[i] + '"></div>';
            //    }
            //    $('#slideshow_entry').html(html);
            //});
            res.send($.html());
        });
    };
}());

