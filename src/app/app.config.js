angular.module('app').config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				controller : 'main',
				templateUrl : '../../views/main.html'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);
