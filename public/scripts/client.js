var app = angular.module('budgetApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider
		.when('/', {
			templateUrl: '../templates/login.html',
			controller: frontController
		})
		.when('/budgets', {
			templateUrl: '../templates/budgets.html',
			controller: frontController
		})
		.when('/transactions', {
			templateUrl: '../templates/transactions.html',
			controller: frontController
		})
});


app.controller('frontController', function($scope, $routeParams){
	function onSignIn(googleUser) {
  		var auth2 = gapi.auth2.getAuthInstance();
  		gapi.auth2.init();

		if (auth2.isSignedIn.get()) {
			var profile = auth2.currentUser.get().getBasicProfile();
			var loggedInID = profile.getId();
			console.log('ID: ' + loggedInID);
		};
	};

	function signOut() {
		var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
    		console.log('User signed out.');
    	});
	};


});




