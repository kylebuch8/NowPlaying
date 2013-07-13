(function() {
	'use strict';

	/*global angular*/
	angular.module('NowPlayingApp')
		.controller('WatchlistCtrl', ['$scope', 'NowPlayingSvc', function($scope, NowPlayingSvc) {
			$scope.movies = NowPlayingSvc.getSavedMovies();

			$scope.removeSavedMovie = function(index) {
				NowPlayingSvc.removeSavedMovie(index);
			};
		}]);
}());