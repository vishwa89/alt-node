alt
.factory('productObject', function($resource) {
	var ProductsResource = $resource('/api/products/:id', {_id: "@id"}, {
  	update: {method: 'PUT', isArray: false}
  });
	
	return ProductsResource;
})
.factory('filterService', function(){
	return {
		activeFilters: {}, 
		searchText: ''
	};
});