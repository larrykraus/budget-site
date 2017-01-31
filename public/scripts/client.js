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
  		var response1 = gapi.auth2.init();

  		var check = function(){
    		if(auth2.isSignedIn.get() == true){
        		var profile = auth2.currentUser.get().getBasicProfile();
				var loggedInID = profile.getId();
				//console.log('ID: ' + loggedInID);
				UserCheck(loggedInID);
    		}
    		else {
        		setTimeout(check, 1000); // check again in a second
    		};
		};
		check();
	};
	function UserCheck(loggedInID) {
		console.log('ID2: ' + loggedInID);
		// $http.post('/api/artists/', vm.newArtist)
		// 	.then(function(response) {
		// 		var artist = response.data;
		// 		$location.path("/artists/" + artist.id);
		// 	});		
	}

	function signOut($scope) {
		var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
    		console.log('User signed out.');
    	});
	};
};



//query database, see if that googleID already exists in user table
// users.findOne({
//	where: {googleid: loggedInID}
// }).then(function (user) {
//     console.log(user.get('name'));
// });

//if it does exist
//send them to their budget page

//if it does not exist
//create a new row in user table with their info
//and send them to their budget page





