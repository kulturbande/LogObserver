require('express-namespace');

var app = module.exports = require('express')(),
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


// Routes
require('./app/routes')(app);

http.listen(app.get('port'));