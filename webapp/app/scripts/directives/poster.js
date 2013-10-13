'use strict';

angular.module('NowPlayingApp')
	.directive('poster', function () {
		return {
			link: function postLink(scope, element, attrs) {
				var spinnerOptions = {
						lines: 12,
						length: 10,
						width: 4
					},
					$spinner = angular.element('<div/>').addClass('spinner-container'),
					$posterBg = angular.element('<div/>').addClass('poster-bg');

				element.append([$spinner, $posterBg]);

				$spinner.spin(spinnerOptions, '#666');

				angular.element('<img/>')
					.attr('src', scope.movie.posters.original)
					.load(function() {
						angular.element(this).remove();

						$spinner.spin(false).hide();

						$posterBg
							.css('background-image', 'url(' + scope.movie.posters.original + ')')
							.fadeIn();
					});
			}
		};
	});