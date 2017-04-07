'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */
var app = angular.module('angularProjectApp', [
    /*'ngAnimate', 
    'ngAria', 
    'ngCookies', 
    'ngMessages', 
    'ngResource', 
    'ngSanitize', 
    'ngTouch',*/
    'ngRoute',
    'angularProjectApp.header',
    'angularProjectApp.linkroutes'
]);
