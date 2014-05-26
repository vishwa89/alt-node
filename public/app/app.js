angular.module('ptv', ['ngResource', 'ngRoute']);

angular.module('ptv')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/partials/index', controller: 'indexCtrl'})
	.when('/videos', { templateUrl: '/partials/videos', controller: 'videosCtrl'});
});