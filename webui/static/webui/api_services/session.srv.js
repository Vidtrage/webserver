(function() {
    'use strict';

    angular.module('vidtrage.api.session', ['vidtrage.session', 'vidtrage.ad'])
        .service('SessionService', ['$log', '$http', 'Episode', 'Ad', function($log, $http, Episode, Ad) {
        
            var sessionService = {};

            // key: contextId as returned from server
            // value: context object

            sessionService.getEpisodes = function(userId) {
                return $http.get('/api/episodes?user=' + userId)
                    .then(function(response) {
                        return JSONToObject(response.data, Episode);
                    }, function(errorReason) {
                        $log.error("SessionService.getEpisodes failed", errorReason);
                    });
            };

            sessionService.getAds = function(userId) {
                return $http.get('/api/ads?user=' + userId)
                    .then(function(response) {
                        return JSONToObject(response.data, Ad);
                    }, function(errorReason) {
                        $log.error("SessionService.getAds failed", errorReason);
                    });
            };

            sessionService.open = function(episode) {
                var session = new Session(episode);
                return session.open().then(function(sessionId) {
                    // store session
                    sessions[sessionId] = session;

                    return sessionId;
                }, function() {
                    $log.warn('SessionService.open session did not open for episode', episode.id);
                });
            };

            sessionService.close = function(sessionId) {

            };

            sessionService.render = function(sessionId, resourceList) {

            }

            /**
            * Return an object or list of objects, instantiated
            */
            var JSONToObject = function(JSONObjects, Factory) {

                if (Array.isArray(JSONObjects)) {
                    var list = [];
                    JSONObjects.forEach(function(item) {
                        var obj = new Factory(item);
                        if (angular.isObject(obj)) {
                            list.push(obj);
                        }
                    });
                    return list;
                } else {
                    return new Factory(JSONObjects);
                }

            };

            return sessionService;

        }]);
})();