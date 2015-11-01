(function(angular) {
	'use strict';

	/* Creating angularjs modules */
	angular.module('slp.services', []);
	angular.module('slp.controllers', []);
	angular.module('slp.directives', []);

	var module = angular.module('slp', [
	  'ngRoute',
	  'pascalprecht.translate',
	  'slp.services',
	  'slp.controllers',
	  'slp.directives'
	]);

	module.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
  			templateUrl: 'views/view.html'
		}).otherwise({redirectTo: '/'});

	    $locationProvider
	    .html5Mode(false)
	    .hashPrefix('!');

  	}]);
}(angular));