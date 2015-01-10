process.env.NODE_ENV = 'test';

require(__dirname + '/assertHelper');

assert = require('assert');
request = require('supertest');
app 	= require('../app');

// global variables
url 	= "http://localhost:"+app.get('port');