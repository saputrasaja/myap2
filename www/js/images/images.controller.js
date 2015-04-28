(function() {
	"use strict";

	angular
		.module("app.images")
		.controller("ImagesCtrl", ImagesCtrl);

		function ImagesCtrl($scope, dataservice) {
			var vm = this;
			$scope.datas = [];

			activate();
			function activate() {
				fetchImageList();
			}

			function fetchImageList() {
				dataservice.fetchImageList().then(processData);
			}

			function processData(result) {
				if (200 === result.status) {
					$scope.datas = result.data;
				}
			}
			
		}
})();