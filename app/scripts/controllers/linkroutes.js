'use strict';

var app = angular.module('angularProjectApp.linkroutes', []);
app.config(function ($routeProvider) {
$routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .when('/gettingstarted', {
        templateUrl: 'views/body-partials/gettingstarted.html',
        controller: 'GettingStartedCtrl',
        controllerAs: 'gettingstarted'
    })
    .when('/css', {
        templateUrl: 'views/body-partials/css.html',
        controller: 'CssCtrl',
        controllerAs: 'css'
    })
    .when('/components', {
        templateUrl: 'views/body-partials/components.html',
        controller: 'ComponentsCtrl',
        controllerAs: 'components'
    })
    .when('/javascript', {
        templateUrl: 'views/body-partials/javascript.html',
        controller: 'JavascriptCtrl',
        controllerAs: 'javascript'
    })
    .when('/customize', {
        templateUrl: 'views/body-partials/customize.html',
        controller: 'CustomizeCtrl',
        controllerAs: 'customize'
    })
    .when('/themes', {
        templateUrl: 'views/body-partials/themes.html',
        controller: 'ThemesCtrl',
        controllerAs: 'themes'
    })
    .when('/expo', {
        templateUrl: 'views/body-partials/expo.html',
        controller: 'ExpoCtrl',
        controllerAs: 'expo'
    })
    .when('/blog', {
        templateUrl: 'views/body-partials/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
    })                          
    .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    });
});