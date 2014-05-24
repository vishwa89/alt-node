angular.module('ptv', ['ngResource', 'ngRoute']);

angular.module('ptv')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/partials/index', controller: 'indexCtrl'});
})
.controller('indexCtrl', function($scope){
	$scope.welcome = 'Weclome, Angular';
});