angular.module('ptv')
.factory('auth', function($http, identity, $q) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();
			$http.post('/login', {username: username, password: password}).then(function(res) {
				if (res.data.success) {
					identity.currentUser = res.data.user;
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		}
	}
})