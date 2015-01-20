(function() {
    'use strict';

    angular.module('vidtrage.episode.scene', [])
        .factory('Scene', ['$log', function($log) {

            function Scene(obj) {

                // protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Scene)) {
					return new Scene();
				}

                var that = this;
                var _resources = obj.resources;

                that.getResources = function() {
                    return _resources;
                };

            }


            return Scene;

        }]);
})();