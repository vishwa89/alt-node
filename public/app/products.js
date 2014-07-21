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
})
.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
	  trigger.click(function(){
	    console.log(this);
	  });
    }
  };
});