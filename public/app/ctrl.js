alt
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
.controller('productCtrl', function($scope) {
    $scope.product = {
        description: 'description Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        notes: 'notes Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        advice: 'advice Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        size: 'size Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.'
    };
    $scope.carousel1 = [
        { img: '/images/thumnail1.jpg' },
        { img: '/images/thumnail2.jpg' }, 
        { img: '/images/thumnail3.jpg' }, 
        { img: '/images/thumnail4.jpg' },        
        { img: '/images/thumnail5.jpg' },
        { img: '/images/thumnail4.jpg' },        
        { img: '/images/thumnail5.jpg' }, 
        { img: '/images/thumnail6.jpg' }
    ]
    $scope.carousel2 = [
        { img: '/images/thumnail7.jpg' },
        { img: '/images/thumnail8.jpg' }, 
        { img: '/images/thumnail9.jpg' }, 
        { img: '/images/thumnail10.jpg' },        
        { img: '/images/thumnail11.jpg' },
        { img: '/images/thumnail10.jpg' },        
        { img: '/images/thumnail11.jpg' },  
        { img: '/images/thumnail12.jpg' }
    ]
})
.controller('filterCtrl', function($scope, filterService) { 
    $scope.filterService = filterService;
})
.controller('brandChapterCtrl', function($scope, $routeParams, $location) { 
    $scope.onchapter = $routeParams.chapter;

    $scope.chapters = [
        { name: 'products', url: '/brand/chapter/products/all' },
        { name: 'story', url: '/brand/chapter/story' },
        { name: 'mood', url: '/brand/chapter/mood' },
        { name: 'talk', url: '/brand/chapter/talk' },
        { name: 'trip', url: '/brand/chapter/trip' },
        { name: 'moment',url: '/brand/chapter/moment' },
        { name: 'trace',url: '/brand/chapter/trace' }
    ]

    $scope.navClass = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[3] ? 'active' : '';
    };
    //http://stackoverflow.com/questions/19943217/ng-class-to-highlight-active-menu-item-based-on-ng-repeat-angularjs

    $scope.navOnShow = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[4] ? 'onshow' : '';
    };

    $scope.navShow = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[3] ? true : false;
    };
});
