angular.module('alt', ['ngResource', 'ngRoute']);

angular.module('alt')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/partials/index', controller: 'indexCtrl'});
});