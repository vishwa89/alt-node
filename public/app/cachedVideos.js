angular.module('ptv').factory('cachedVideoObject', function(videoObject) {
  var videos;

  return {
    query: function() {
      if(!videos) {
        videos = videoObject.query();
      }

      return videos;
    }
  }
})