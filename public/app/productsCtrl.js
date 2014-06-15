angular.module('alt')
.controller('productsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/products.json').success(function(data) {

    $scope.products = data;
    $scope.likeEvent = function(product) {
      product.likeCount++;
    }

    $scope.sortOrder = '-id';
    $scope.sortOptions = [
        {value: "-id", text: "Most recent"},
        {value: "-likeCount", text: "Most liked"},
        {value: "-price", text: "Price high"},
        {value: "price", text: "Price low"}
    ];

  });
}]);