'use strict';

angular.module('NowPlayingApp')
	.service('Movies', ['$http', function Movies($http) {
		var rtInTheatersUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?callback=JSON_CALLBACK&apikey=qdcwaccyw2tbd5yyk27mdfw2';

		return {
			getMovies: function() {
				return $http.jsonp(rtInTheatersUrl);
			}
		};
	}]);