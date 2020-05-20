exports.home = function (req, res) {

    req.getConnection(function (err, connect) {
        var query = connect.query('SELECT * FROM product ', function (err, rows) {
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('index.ejs', {
                page_title: "Luxury Watches A Ecommerce Category Flat Bootstrap Resposive Website Template | Home :: w3layouts",
                data: rows
            });
        });
    });
}


exports.products = function (req, res) {

    req.getConnection(function (err, connect) {
        var query = connect.query('SELECT * FROM product LIMIT 3', function (err, rows) {
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('products.ejs', {
                page_title: "Luxury Watches A Ecommerce Category Flat Bootstrap Resposive Website Template | Home :: w3layouts",
                data: rows
            });
        });
    });
}
