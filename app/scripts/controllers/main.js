'use strict';

/**
 * @ngdoc function
 * @name remiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remiApp
 */
angular.module('remiApp')
	// .controller('MainCtrl', function(githubFactory) {
	.controller('MainCtrl', function($scope) {
		$("div.navbar-fixed-top").autoHidingNavbar();
		// githubFactory.getReposByUser({
		// 	user: "remihb",
		// }).then(function(_data) {
		// 	console.log(_data);
		// }).catch(function(_data) {
		// 	console.log(_data);
		// });
		var prevy = 0;
		var lastScrollTop = 0;
		$scope.navbarShow = function(event) {

			var y = event.pageY - $(window).scrollTop();
			if (y <= $('#navbar').height() + 10) {
				$("div.navbar-fixed-top").autoHidingNavbar('show', true);
			} else {
				$("div.navbar-fixed-top").autoHidingNavbar('hide', true);
			}
			prevy = y;
		};

		$(window).scroll(function() {
			var st = $(this).scrollTop();
			if (st > lastScrollTop && $('#navbar:hover').length !== 0) {
				$("div.navbar-fixed-top").autoHidingNavbar('show', true);
			}
			lastScrollTop = st;
		});


	});
