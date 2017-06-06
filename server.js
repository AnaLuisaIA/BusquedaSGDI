var express =  require('express');
var path = require('path');
var bodyParser = require('body-parser');

var admin = require('./routes/admin');
var index = require('./routes/index');

var port = 3000;
var app = express();

//Folder donde estarán los elementos de angular
app.use(express.static(path.join(__dirname, 'dist')));

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/', index);
app.use('/', admin);

app.listen(port, function() {
  console.log('Servidor en '+port);
});
