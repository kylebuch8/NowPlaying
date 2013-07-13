(function() {
    'use strict';

    /*global angular*/
    angular.module('NowPlayingApp', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                    .when('/watchlist', {
                      templateUrl: 'views/watchlist.html',
                      controller: 'WatchlistCtrl'
                    })
                    .when('/watchlist', {
                      templateUrl: 'views/watchlist.html',
                      controller: 'WatchlistCtrl'
                    })
                    .otherwise({
                    redirectTo: '/'
                });
        }]);
}());