angular.module('alt', ['ngResource', 'ngRoute']);

angular.module('alt')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index'})
	.when('/brand/products', { templateUrl: '/pages/brand-products' })
	.when('/brand/trace', { templateUrl: '/pages/brand-products' })
	.when('/brand/section/:section', { templateUrl: '/pages/brand-section' });
});