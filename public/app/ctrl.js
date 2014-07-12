angular.module('alt')
.controller('indexCtrl', function($scope){
	$scope.site = {
		name: 'alt',
		description: 'a lovely thing'
	};
})
.controller('productsCtrl', function($scope, productObject, filterService) {
    $scope.filterService = filterService;
    $scope.products = productObject.query();
    $scope.likeEvent = function(product) {
      product.likeCount++;
    } 
})
.controller('filterCtrl', function($scope, filterService) { 
    $scope.filterService = filterService;
})
.controller('brandSectionCtrl', function($scope, $routeParams) { 
    $scope.section = $routeParams.section;
    console.log($scope.section);
});
