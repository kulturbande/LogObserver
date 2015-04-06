require('express-namespace');

var express = require('express'),
	app = module.exports = express(),
	path = require('path'),
	http = require('http').Server(app),
	io = require('socket.io')(http);

// set the port of web server
app.set('port', process.env.PORT || 3000);
if (app.get('env') === 'test') {
  app.set('port', 3001);
}

// specify the express view
app.set('views', __dirname + '/app/views');
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	layoutsDir: 'app/views/layouts',
	partialsDir: 'app/views/partials',
	defaultLayout: 'default',
	helpers: require('./app/libs/helpers')
}));
app.set('view engine', 'handlebars');

app.use(require('connect-assets')({build: true}));
app.use(express.static(__dirname + '/assets'));

// Routes
require('./app/routes')(app);
require('./app/services/observer')(io);

http.listen(app.get('port'));
