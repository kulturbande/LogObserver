
var app = angular.module('logObserver', [
	'ngRoute',
	'logObserver.commons'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	otherwise({
        	redirectTo: '/main'
    	});
  }]);

