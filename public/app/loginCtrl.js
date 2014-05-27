angular.module('ptv')
.factory('notifier', function() {
	return {
		notify: function(msg) {
			toastr.success(msg);
		}
	}
})
.factory('identity', function(){
	var currentUser;
	return {
		currentUser: currentUser,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
	}
})
.controller('loginCtrl', function($scope, $http, notifier, identity, auth) {
	$scope.identity = identity;
	$scope.login = function(username, password) {
		auth.authenticateUser(username, password).then(function(success) {
			if (success) {
				notifier.notify('You have successfully logged in!');
			} else {
				notifier.notify('Username or Password incorrect!');
			}
		})
	}
});