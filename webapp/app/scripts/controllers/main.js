'use strict';

angular.module('NowPlayingApp')
	.controller('MainCtrl', ['$scope', '$timeout', 'Movies', function ($scope, $timeout, Movies) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		Movies.getMovies().then(function(data) {
			$scope.movies = data.data.movies;
			
			$timeout(function() {
				Swipe(angular.element('#slider')[0]);
			}, 0);
		});
	}]);
