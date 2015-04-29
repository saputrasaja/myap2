(function() {
	"use strict";

	angular.module('app.controllers', [])

	.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
		$scope.showLoginBtn = true;
		// Form data for the login modal
		$scope.loginData = {};

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function() {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function() {
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function() {
			console.log('Doing login', $scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			// $timeout(function() {
				
			// }, 1000);
			$scope.closeLogin();
		};
	})

	.controller('PlaylistsCtrl', function($scope) {
		$scope.playlists = [
			{ title: 'Reggae', id: 1 },
			{ title: 'Chill', id: 2 },
			{ title: 'Dubstep', id: 3 },
			{ title: 'Indie', id: 4 },
			{ title: 'Rap', id: 5 },
			{ title: 'Cowbell', id: 6 }
		];
	})

	.controller('PlaylistCtrl', function($scope, $stateParams) {
	})

	.controller('RandomListCtrl', function($scope) {

		$scope.list = [
			{ text: '1 - 10', min: 1 , max: 10},
			{ text: '11 - 20', min: 11 , max: 20},
			{ text: '21 - 50', min: 21, max: 50 },
			{ text: '51 - 100', min: 50 , max: 100}
		];
			
	})
	.controller('RandomItemCtrl', 
	function($scope, $stateParams, $cordovaDevice, $cordovaClipboard, $cordovaBatteryStatus, $rootScope) {
		var max = parseInt($stateParams.max);
		var min = parseInt($stateParams.min);

		$scope.randomValue = Math.random() * (max - min) + min;

		console.log("RandomItemCtrl ");
		document.addEventListener("deviceready", function () {

			var device = $cordovaDevice.getDevice();
			console.log("device : ", device);

			$cordovaClipboard.paste().then( function(r) {
				console.log("paste result : ", r);
			});
			
		}, false);
	})

	.controller('OtherCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaCamera) {
		$ionicPlatform.ready(function() {
					var options = {
							quality: 50,
							destinationType: Camera.DestinationType.DATA_URL,
							sourceType: Camera.PictureSourceType.CAMERA,
							allowEdit: true,
							encodingType: Camera.EncodingType.JPEG,
							targetWidth: 100,
							targetHeight: 100,
							popoverOptions: CameraPopoverOptions,
							saveToPhotoAlbum: false
					};
	 
					$scope.takePicture = function() {
							$cordovaCamera.getPicture(options).then(function(imageData) {
									$scope.imgSrc = "data:image/jpeg;base64," + imageData;
							}, function(err) {
									console.log(err);
							});
					}
	 
			});
	});

})();
