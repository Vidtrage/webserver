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
                var _filePath = obj.file_path,
                    _source = obj.source,
                    _description = obj.description,
                    _uploadPath = obj.upload_path,
                    _duration = obj.duration,
                    _user = obj.user;

				Object.defineProperty(that, "name", {
					get: function() {return _description; }
				});
				Object.defineProperty(that, "source", {
					get: function() {return _filePath; }
				});

            };

            return Ad;

        }]);

})();