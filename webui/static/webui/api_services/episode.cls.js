(function() {
    'use strict';

    angular.module('vidtrage.episode', ['vidtrage.episode.scene'])
        .factory('Episode', ['$log', function($log) {

            function Episode(obj) {

				// protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Episode)) {
					return new Episode(arguments);
				}

				if (!angular.isObject(obj)) {
					$log.warn("Episode Invalid constructor params", obj);
					obj = {};
				}

				////////////////////////
				// Private Members //
				////////////////////////

				var that = this;
				var _name = obj.name;
				var _source = obj.source;
				var _duration;
				var _description;
				var _user;
				var _scenes = [];

				Object.defineProperty(that, "name", {
					get: function() {return _name; }
				});
				Object.defineProperty(that, "source", {
					get: function() {return _source; }
				});
            }


            // return the factory function
            return Episode;
        }])
})();