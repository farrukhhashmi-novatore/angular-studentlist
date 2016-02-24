angular.module('MainService', []).factory('Main', ['$http', function($http) {

    return {
        getAllUsers: function() {

            return student_list = [

                {id: 1,first_name : "farrukh", last_name : "hashmi", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 2,first_name : "ahmad", last_name : "abc", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 3,first_name : "zia", last_name : "xyz", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 4,first_name : "hashmi", last_name : "hashmi", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 5,first_name : "yasir", last_name : "abc", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 6,first_name : "ahsan", last_name : "jkl", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 7,first_name : "talha", last_name : "xyz", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},
                {id: 8,first_name : "mno", last_name : "pqrs", email:"farr@hotmail.com", address:"P.C.S.IR",phone:"03244993387"},

            ];

        },

        create: function(student){

            student_list.push({id:student.id,first_name:student.first_name,last_name:student.last_name,email:student.email,address:student.address,phone:student.phone});
        }




    };




}]);