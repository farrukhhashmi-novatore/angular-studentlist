angular.module('MainCtrl', []).controller('MainController', function($scope,$location,Main) {










	$scope.createstudent = function () {
		$location.path('/createstudent');
	};

	$scope.student_list = Main.getAllUsers();

	$scope.editstudent = function (id) {
		$location.path('/editstudent/' +id);
	};


});