
angular.module('logObserver.logs', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/main', {
				controller: 'logIndexController',
				templateUrl: 'templates/logs/index.html'
			});
  	}]
);