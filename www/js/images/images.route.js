(function() {
	"use strict";

	angular
		.module("app.images")
		.config(configRoute);

	function configRoute($stateProvider) {
		$stateProvider
			.state("app.images", {
				url: "/images",
				views: {
					'menuContent': {
						templateUrl: "js/images/images.html",
						controller: "ImagesCtrl",
						controllerAs: "vm",
					}
				},
				cache: false
			});
	}

})();