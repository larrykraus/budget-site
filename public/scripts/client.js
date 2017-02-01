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
FrontController.$inject = ['$scope', '$http', '$location'];

function FrontController($scope, $http, $location) {
	$scope.signOut = signOut;
	$scope.onSignIn = onSignIn;
	var vm = this;
	vm.sendUser = sendUser;

	function onSignIn(googleUser, $scope) {
  		var auth2 = gapi.auth2.getAuthInstance();
  		var response1 = gapi.auth2.init();

  		var check = function(){
    		if(auth2.isSignedIn.get() == true){
        		var profile = auth2.currentUser.get().getBasicProfile();
				var loggedInID = profile.getId();
				sendUser($http, loggedInID);
    		}
    		else {
        		setTimeout(check, 500); // check again in a second
    		};
		};
		check();
	};

	function sendUser($http, loggedInID, $location) {
		console.log('googleID: ' + loggedInID);
		var package = {loggedInID};
		vm.new_user = {
			"googleID": loggedInID
		};
		$http.post('/api/users', vm.new_user)
			.then(function(response) {
				console.log(response);
				var user = response.data;
				$location.path("/budgets/" + user.id);
			});		
	};

	function signOut($scope) {
		var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
    		console.log('User signed out.');
    	});
	};
};






