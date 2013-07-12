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
                    .otherwise({
                    redirectTo: '/'
                });
        }]);
}());