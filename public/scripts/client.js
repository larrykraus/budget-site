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

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    	console.log('User signed out.');
    });
};

function onSignIn(googleUser) {
  	var id_token = googleUser.getAuthResponse().id_token;

  	var auth2 = gapi.auth2.getAuthInstance();
  	gapi.auth2.init();

	if (auth2.isSignedIn.get()) {
		var profile = auth2.currentUser.get().getBasicProfile();
		console.log('ID: ' + profile.getId());
		console.log('Full Name: ' + profile.getName());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
	};

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '../../server.js');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		console.log('Signed in as: ' + xhr.responseText);
	};
	xhr.send('idtoken=' + id_token);
};





