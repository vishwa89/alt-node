var alt = angular.module('alt', ['ngResource', 'ngRoute', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/brand/chapter/products/all', { templateUrl: '/pages/brand-products-all' })
	.when('/brand/chapter/products/featured', { templateUrl: '/pages/brand-products-featured' })
	.when('/brand/chapter/trace', { templateUrl: '/pages/brand-products-all' })
	.when('/brand/chapter/:chapter', { templateUrl: '/pages/brand-chapter' })
	.when('/product', { templateUrl: '/pages/product', controller: 'productCtrl' })
	.when('/account-mylove', { templateUrl: '/pages/account-mylove', controller: 'productCtrl' })
	.when('/search', { templateUrl: '/pages/search', controller: 'productCtrl' })
	.when('/signin', { templateUrl: '/pages/signin' });
});