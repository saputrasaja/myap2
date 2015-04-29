(function() {
	"use strict";
	angular
		.module("app.core")
		.factory("dataservice", Dataservice);

	function Dataservice($q, $http, $rootScope) {
		var API_URL = "http://dagelan.fireh.biz.id";
		// var API_URL = "http://threadbender.me";
		var service = {
			fetchImageList: fetchImageList,
			fetchClientSecret: fetchClientSecret
		};
		return service;

		/*
		 http://user1:user1@http://dagelan.fireh.biz.id/o/credential
		 http://user1:user1@threadbender.me/o/credential
		*/

		function fetchClientSecret() {
			var req = getREQObj("/o/credential", "GET");
			return $http(req).then(getResult);
		}

		function fetchImageList() {
			var req = getREQObj("/f", "GET");
			return $http(req).then(getResult);
		}

		function getResult(result) {
			return result;
		}

		// Supported methods
		function getREQObj(path, method) {
			var url = generateURL(path);
			return {
				type: method,
				url: url
			}
		}

		function isCordovaExist() {
			return window.cordova !== undefined;
		}

		function generateURL(path) {
			var url = "";
			if (isCordovaExist()) {
				url = url + API_URL;
			}
			return url + path;
		}
	}

})();