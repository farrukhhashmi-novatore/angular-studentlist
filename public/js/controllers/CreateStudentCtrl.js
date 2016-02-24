angular.module('CreateStudentCtrl', []).controller('CreateStudentController', function($scope,$location,Main) {


    $scope.student ={};
    $scope.addstudent = function () {

        Main.create($scope.student);
        $location.path('/');
    }
});