(function() {
    'use strict';

    angular.module('vidtrage.session', [])
        .factory('Session', ['$log', '$http', function($log, $http) {

            function SessionConstructor(episode) {
                var that = this;
                var _episode = episode;
                var _sessionId = sessionId;

                that.open = function() {
                    return $http.get('/api/session/' + episode.id)
                        .then(function(sessionId) {
                            _sessionId = sessionId;
                            return sessionId;
                        }, function(reason) {
                            $log.error('Session.open failed for', episode, 'with reason', reason);
                            return undefined;
                        });
                };

                that.close = function() {
                    return $http.delete('/api/session/' + episode.id)
                        .then(function() {
                            // release resources
                            _episode = undefined;
                            _sessionId = undefined;
                            return true;
                        }, function(reason) {
                            $log.error("Session.close failed for", _sessionId);
                            return false;
                        });
                };

                that.render = function(sceneId, resourceList) {
                    return $http.post('/api/session/' + _sessionId + '/' + sceneId, resourceList);
                };

                that.cancelRender = function(sceneId) {
                    return $http.delete('/api/session/' + _sessionId + '/' + sceneId + sceneId);
                };

                that.requestNewStream = function(streamId) {
                    var streamId = streamId || '';
                    return $http.get('/api/session' + _sessionId + '/' + sceneId + '/' + streamId);
                };
            };

            return SessionConstructor;

        }]);

})();