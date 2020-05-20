var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var session = require('express-session');
var expressku = require('./routes/expressku');
var flash = require('express-flash');

// connect database
var conn = require('express-myconnection');
var mysql = require('mysql');

//menjalankan server di port
app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');

//menjalankan file express dan menampilkan folder public
app.use(logger('dev'));
//app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(
    conn(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'ecommerce'
    }, 'single')
);
// ngelink ke beranda masing masing
app.get('/ecommerce_tugas', expressku.home);
app.get('/ecommerce_tugas/home', expressku.home);
app.get('/ecommerce_tugas/product', expressku.products);

app.listen(app.get('port'), function () {
    console.log('Server is running in port ' + app.get('port'));
});
