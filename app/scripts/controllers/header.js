'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp.headerapp', [])
.controller('HeaderCtrl', function ($scope, $http) {
    $http.get('/staticjson.json')
    .then(function (response) {$scope.headernames = response.data.header;});
});
