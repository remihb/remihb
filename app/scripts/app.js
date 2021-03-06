'use strict';

/**
 * @ngdoc overview
 * @name remiApp
 * @description
 * # remiApp
 *
 * Main module of the application.
 */
angular
	.module('remiApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'jtt_github',
		'duScroll'
	])
	.value('duScrollDuration', 1000)
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
