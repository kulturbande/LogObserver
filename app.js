require('express-namespace');

var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile); // render simple html
app.set('view engine', 'ejs');


// Routes
require('./app/routes')(app);

http.listen(app.get('port'));