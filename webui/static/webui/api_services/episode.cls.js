(function() {
    'use strict';

    angular.module('vidtrage.episode', [])
        .factory('Episode', ['$log', function($log) {

            function Episode() {

				// protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Episode)) {
					return new Episode();
				}

				////////////////////////
				// Private Members //
				////////////////////////

				var that = this;
				var _name;
				var _duration;
				var _description;
				var _user;
				var _resources = [];

            }


            // return the factory function
            return Episode;
        }])
})();