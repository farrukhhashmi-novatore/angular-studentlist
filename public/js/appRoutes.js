angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		.when('/createstudent', {
			templateUrl: 'views/createstudent.html',
			controller: 'CreateStudentController'
		})
	.when('/editstudent/:id', {
		templateUrl: 'views/editstudent.html',
		controller: 'EditStudentController'
	});

	$locationProvider.html5Mode(true);

}]);