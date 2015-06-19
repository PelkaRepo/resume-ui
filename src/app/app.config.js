angular.module('app').config(
		[ '$routeProvider', 'ngDialogProvider', function($routeProvider, ngDialogProvider) {
			$routeProvider.when('/', {
				controller : 'main',
				templateUrl : '../views/home.html'
			}).when('/home', {
				controller : 'main',
				templateUrl : '../views/home.html'
			}).when('/menu', {
				controller : 'menu',
				templateUrl : '../views/menu.html'
			}).when('/catering', {
				controller : 'catering',
				templateUrl : '../views/catering.html'
			}).otherwise({
				redirectTo : '/'
			});

			ngDialogProvider.setDefaults({
						className: 'ngdialog-theme-default',
						plain: false,
						showClose: true,
						closeByDocument: true,
						closeByEscape: true,
						appendTo: false,
						preCloseCallback: function () {
								console.log('default pre-close callback');
						}
			});
		} ]);
