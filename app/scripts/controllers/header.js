'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
var app = angular.module('angularProjectApp.header', []);
app.controller('HeaderCtrl', function ($scope, $http, $location) {
	$http.get('/staticjson.json')
    .then(function (response) {$scope.headernames = response.data.header;});

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

});
