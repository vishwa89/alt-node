angular.module('alt')
.controller('videoCtrl', function($scope, cachedVideoObject, $routeParams){
    $scope.video = cachedVideoObject.get({_id:$routeParams.id});
});