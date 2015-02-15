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
app.engine('html', require('ejs').renderFile); // render simple html
app.set('view engine', 'ejs');

app.use(require('connect-assets')({build: true}));
app.use(express.static(__dirname + '/assets'));

// Routes
require('./app/routes')(app);
require('./app/services/observer')(io);

http.listen(app.get('port'));