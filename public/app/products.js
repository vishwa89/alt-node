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
    angular.element(element).css('color','blue');
    if (scope.$last){
      $('.tag-trigger').hover(function(){
      	console.log(this);
      	//$(this).parent().find('.tag_info').fadeIn();
      	$(this).parents('.tag').find('.tag_info').fadeIn(500, 'easeOutExpo');
      }, function(){
      	$('.tag_info').fadeOut();
      })
    }
  };
})
.directive('follow', function() {
  return function(scope, element, attrs) {
    $(".follow").click( function(event){
    event.preventDefault();
    console.log(this);
    $('#follow').stop().fadeIn(200);
    $('#follow').addClass("popup");
    return false;
  });
    $(".close").click(function(){
      $('#follow').stop().fadeOut(200);
    $('#follow').removeClass("popup");
    })
  };  
});