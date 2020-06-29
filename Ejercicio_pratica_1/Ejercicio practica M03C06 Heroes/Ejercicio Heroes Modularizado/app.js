//var createError = require('http-errors');
var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//const fs = require ('fs')

var app = express();

/* // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); */

/* app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); */


// Leyendo y parseando (en array) el contenido de heroes.json
//const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

//Importo la variable Route
let router = express.Router();

//Rutas personalizadas
let routesHeroes = require ('./routes/heroes.js')
let routesMain = require ('./routes/main.js')

// Ruta Raíz / ➝ Home
app.use('/',routesMain);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes', routesHeroes);	


// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

/* // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

module.exports = app;
