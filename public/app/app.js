angular.module('alt', ['ngResource', 'ngRoute']);

angular.module('alt')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index'})
	.when('/brand/products-all', { templateUrl: '/pages/brand-products-all' })
	.when('/brand/products-featured', { templateUrl: '/pages/brand-products-featured' })
	.when('/brand/trace', { templateUrl: '/pages/brand-products-all' })
	.when('/brand/chapter/:chapter', { templateUrl: '/pages/brand-chapter' });
});