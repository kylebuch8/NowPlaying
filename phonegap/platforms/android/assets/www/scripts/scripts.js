"use strict";angular.module("NowPlayingApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("NowPlayingApp").controller("MainCtrl",["$scope","$timeout","Movies",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],c.getMovies().then(function(c){a.movies=c.data.movies,b(function(){Swipe(angular.element("#slider")[0])},0)})}]),angular.module("NowPlayingApp").service("Movies",["$http",function(a){var b="http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?callback=JSON_CALLBACK&apikey=qdcwaccyw2tbd5yyk27mdfw2";return{getMovies:function(){return a.jsonp(b)}}}]);