angular.module('app', [ 'ngRoute' ]).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				controller : 'main',
				templateUrl : '../views/home.html'
			}).when('/home', {
				controller : 'main',
				templateUrl : '../views/home.html'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);