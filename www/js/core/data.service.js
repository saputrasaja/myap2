(function() {
	"use strict";
	angular
		.module("app.core")
		.factory("dataservice", Dataservice);

	function Dataservice($q, $http, $rootScope) {
		var service = {
			fetchImageList: fetchImageList
		};
		return service;

		function isCordovaExist() {
			return window.cordova !== undefined;
		}

		function generateURL(path) {
			var url = "";
			if (isCordovaExist()) {
				url = url + "http://threadbender.me";
			}
			return url + path;
		}

		function fetchImageList() {
			var url = generateURL("/f");
			var req = {
				type: 'GET',
				url: url
			}
			return $http(req).then(getResult);
		}

		function getResult(result) {
			return result;
		}
	}

})();