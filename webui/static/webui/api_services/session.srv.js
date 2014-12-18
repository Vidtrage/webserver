(function() {
    'use strict';

    angular.module('vidtrage.api.session', [])
        .service('SessionService', ['$log', '$http', function($log, $http) {
        
            var sessionService = {};

            // key: contextId as returned from server
            // value: context object
            sessions = {};

            sessions.getEpisodes = function(userId) {
                return $http.request('/api/episodes?user=' + userId)
                    .then(function(episodesJSON) {
                        return JSONToObject(episodesJSON, Episode);
                    }, function(errorReason) {
                        $log.error("SessionService.getEpisodes failed", errorReason);
                    });
            };

            sessions.getAds = function(userId) {
                return $http.request('/api/ads?user=' + userId)
                    .then(function(adsJSON) {
                        return JSONToObject(adsJSON, Ad);
                    }, function(errorReason) {
                        $log.error("SessionService.getAds failed", errorReason);
                    });
            };

            sessions.open = function(episodeId) {

            };

            session.close = function(sessionId) {

            };

            session.render = function(sessionId, resourceList) {

            }

            /**
            * Return an object or list of objects, instantiated
            */
            var JSONToObject = function(JSON, Factory) {

                if (Array.isArray(JSON)) {
                    var list = [];
                    JSON.forEach(function(item) {
                        var obj = new Factory(item);
                        if (angular.isObject(obj)) {
                            list.push(obj);
                        }
                    });
                    return list;
                } else {
                    return new Factory(JSON);
                }

            };

            return sessionService;

        }]);
})();