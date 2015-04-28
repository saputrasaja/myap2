// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

(function() {
	"use strict";

	angular.module('app', [
		'ionic', 
		'ngCordova',

		'app.core',
		'app.images',

		'app.controllers', 
		
		]
	)
	.run(appRun)
	.config(configRoute)
	.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

	function appRun($ionicPlatform, $rootScope) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}

			document.addEventListener("deviceready", function () {
				window.addEventListener('batterystatus', function(result) {
					$rootScope.rootbatteryLevel = result.level;
					$rootScope.rootisPlugged = result.isPlugged;
				}, false);
			}, false);

		});
	}

	function configRoute($urlRouterProvider, $stateProvider) {
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/randomlist');

		$stateProvider
			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: 'AppCtrl'
			})
			.state('app.other', {
				url: "/other",
				views: {
					'menuContent': {
						templateUrl: "templates/other.html",
						controller: 'OtherCtrl'
					}
				},
				cache: false
			})
			.state('app.other2', {
				url: "/other2",
				views: {
					'menuContent': {
						templateUrl: "templates/other2.html",
						controller: 'OtherCtrl2'
					}
				},
				cache: false
			})
			.state('app.randomlist', {
				url: "/randomlist",
				views: {
					'menuContent': {
						templateUrl: "templates/randomlist.html",
						controller: 'RandomListCtrl'
					}
				},
				cache: false
			})
			.state('app.randomitem', {
				url: "/randomlist/:min/:max",
				views: {
					'menuContent': {
						templateUrl: "templates/randomitem.html",
						controller: 'RandomItemCtrl'
					}
				},
				cache: false
			});
	}
})();