(function() {
    'use strict';

    angular.module('vidtrage.episode', ['vidtrage.episode.scene'])
        .factory('Episode', ['$log', function($log) {

            function Episode(obj) {

				// protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Episode)) {
					return new Episode(arguments);
				}

				////////////////////////
				// Private Members //
				////////////////////////

				var that = this;
				var _name;
				var _duration;
				var _description;
				var _user;
				var _scenes = [];

            }


            // return the factory function
            return Episode;
        }])
})();