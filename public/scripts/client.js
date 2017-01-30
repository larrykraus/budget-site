angular.module("budgetApp", ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$routeProvider
			.when('/', {
				templateUrl: '../templates/login.html'
			})

			.when('/budgets', {
				templateUrl: '../templates/budgets.html'
			})

			.when('/transactions', {
				templateUrl: '../templates/transactions.html'
			})

	});