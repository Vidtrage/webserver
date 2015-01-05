(function() {
    'use strict';

    angular.module('vidtrage.ad', [])
        .factory('Ad', ['$log', function($log) {

            function Ad(obj) {

                // protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Ad)) {
					return new Ad();
				}

                if (!angular.isObject(obj)) {
					$log.warn("Ad Invalid constructor params", obj);
					obj = {};
				}

                ////////////////////////
				// Private Members //
				////////////////////////

				var that = this;
                var _name = obj.name,
                    _source = obj.source,
                    _description,
                    _uploadPath,
                    _duration,
                    _user

				Object.defineProperty(that, "name", {
					get: function() {return _name; }
				});
				Object.defineProperty(that, "source", {
					get: function() {return _source; }
				});

            };

            return Ad;

        }]);

})();