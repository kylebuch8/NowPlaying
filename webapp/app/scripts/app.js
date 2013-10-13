'use strict';

/*
 * iOS 7 status bar fix
 */
function onDeviceReady() {
    if (parseFloat(window.device.version) === 7.0) {
        document.body.style.marginTop = '20px';
    }
}

document.addEventListener('deviceready', onDeviceReady, false);

/*
 * kick everything off
 */
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