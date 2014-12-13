(function() {
    'use strict';

    angular.module('vidtrage.ad', [])
        .factory('Ad', ['$log', function($log) {

            function Ad() {

                // protect in case constructor is invoked without the 'new' keyword
				if(false === (this instanceof Ad)) {
					return new Ad();
				}

				////////////////////////
				// Private Members //
				////////////////////////

				var that = this;
                var _filePath,
                    _description,
                    _uploadPath,
                    _duration,
                    _user

            };

            return Ad;

        }]);

})();