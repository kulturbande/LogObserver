
var app = angular.module('logObserver', [
	'ngRoute',
	'logObserver.commons',
	'logObserver.logs'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	otherwise({
        	redirectTo: '/main'
    	});
  }]);

