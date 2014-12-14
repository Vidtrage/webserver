(function() {
    'use strict';

    angular.module('vidtrage.api.session', [])
        .service('SessionService', ['$log', '$http', function($log, $http) {
        
            var sessionService = {};

            // key: contextId as returned from server
            // value: context object
            sessions = {};
            episodes = [];
            ads = [];

            sessions.getEpisodes = function(userId) {
                return $http.request('/api/episodes?user=' + userId)
                    .then(function(episodesJSON) {
                        return JSONToObject(episodesJSON, Episode);
                    }, function(errorReason) {
                        $log.error("SessionService.getEpisodes failed", errorReason);
                    });
            };

            var JSONToObject = function(JSON, Factory) {
                var list = [];

                if (Array.isArray(JSON) {
                    JSON.forEach(function(item) {
                        var obj = new Factory(item);
                        if (angular.isObject(obj)) {
                            list.push(obj);
                        }
                    });
                });

                return list;
            };

            sessions.getAds = function(userId) {
                return $http.request('/api/ads?user=' + userId)
                    .then(function(adsJSON) {
                        return JSONToObject(adsJSON, Ad);
                    }, function(errorReason) {
                        $log.error("SessionService.getAds failed", errorReason);
                    });
            };

            return sessionService;

        }]);
})();