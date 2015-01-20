(function() {
    'use strict';

    angular.module('vidtrage.episode', ['vidtrage.episode.scene'])
        .factory('Episode', ['$log', 'Scene', function($log, Scene) {

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
				var _filePath = obj.file_path;
				var _duration = obj.duration;
				var _description = obj.description;
				var _user = obj.user;
				var _scenes = [];

				Object.defineProperty(that, "name", {
					get: function() {return _description; }
				});
				Object.defineProperty(that, "source", {
					get: function() {return _filePath; }
				});

				var initScenes = function(episode) {
					if (!angular.isObject(episode) || !Array.isArray(episode.scenes)) {
						$log.warn('Episode initScenes invalid scenes array', episode);
						return;
					}


					episode.scenes.forEach(function(scene) {
						scene = new Scene(scene);

						if (scene instanceof Scene){
							_scenes.push(scene);
						}
					});
				}
				initScenes(obj);


				that.getScenes = function() {
					return _scenes;
				};
            }



            // return the factory function
            return Episode;
        }])
})();