var app = angular.module('budgetApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider
		.when('/', {
			templateUrl: '../templates/login.html',
			controller: FrontController
		})
		.when('/budgets', {
			templateUrl: '../templates/budgets.html',
			controller: FrontController
		})
		.when('/transactions', {
			templateUrl: '../templates/transactions.html',
			controller: FrontController
		})
});

app.controller('FrontController', FrontController);
FrontController.$inject = ['$scope', '$http'];

function FrontController($scope, $http) {
	$scope.signOut = signOut;
	$scope.onSignIn = onSignIn;

	function onSignIn(googleUser, $scope) {	
  		var auth2 = gapi.auth2.getAuthInstance();
  		gapi.auth2.init();
  		console.log(auth2.isSignedIn.get());

		if (auth2.isSignedIn.get()) {

			var profile = auth2.currentUser.get().getBasicProfile();
			var loggedInID = profile.getId();
			console.log('ID: ' + loggedInID);
		};
	};

	function signOut($scope) {
		var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
    		console.log('User signed out.');
    	});
	};
};




