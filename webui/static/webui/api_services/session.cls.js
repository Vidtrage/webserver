(function() {
    'use strict';

    angular.module('vidtrage.session', [])
        .factory('Session', ['$log', '$http', function($log, $http) {

            function SessionConstructor(episode) {
                var that = this;
                var _episode = episode;
                var _sessionId = sessionId;

                that.open = function() {
                    $http.get('/api/session/' + episode.id)
                        .then(function(sessionId) {
                            _sessionId = sessionId;
                            return sessionId;
                        }, function(reason) {
                            $log.error('Session.open failed for', episode, 'with reason', reason);
                            return undefined;
                        });
                };

                that.close = function() {
                    $http.delete('/api/session/' + episode.id)
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

                that.render = function(sceneId, resourceId, ad) {

                };
            };

            return SessionConstructor;

        }]);

})();