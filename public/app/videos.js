angular.module('alt').factory('videoObject', function($resource) {
  var VideoResource = $resource('/api/videos/:id', {_id: "@id"}, {
  	update: {method: 'PUT', isArray: false}
  });

  console.log(VideoResource);
  
  return VideoResource;
});