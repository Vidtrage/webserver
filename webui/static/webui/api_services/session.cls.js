(function() {
    'use strict';

    angular.module('vidtrage.session', ['vidtrage.episode'])
        .factory('Session', ['$log', '$http', '$q', 'Episode', function($log, $http, $q, Episode) {

            function SessionConstructor(episode) {

                var that = this;
                var _episode = undefined;
                var _sessionId = undefined;

                if (!(episode instanceof Episode)) {
                    $log.error('episode is not of type Episode', episode);
                } else {
                    _episode = episode;
                }

                that.open = function() {
                    if (!hasEpisode()) {
                        $log.debug('Session.open rejecting session open request');
                        return resolveRejection('No episode');
                    }

                    $log.debug('Session.open request for episode', episode.id);

                    return $http.get('/api/session/' + episode.id)
                        .then(function(sessionId) {
                            $log.debug('Session.open for episode', episode.id, 'returned session id', sessionId);
                            _sessionId = sessionId;
                            return sessionId;
                        }, function(reason) {
                            $log.error('Session.open failed for', episode, 'with reason', reason);
                            return undefined;
                        });
                };

                that.close = function() {
                    if (!hasSession()) return rejectNoSession();

                    $log.debug('Session.close request for session', _sessionId);

                    return $http.delete('/api/session/' + episode.id)
                        .then(function() {
                            $log.debug('Session.close successful for session', _sessionId);
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
                    if (!hasSession()) return rejectNoSession();

                    $log.debug('Session.render session', sessionId, ', scene', sceneId, ',resources', resourceList);
                    return $http.post('/api/session/' + _sessionId + '/' + sceneId, resourceList);
                };

                that.cancelRender = function(sceneId) {
                    if (!hasSession()) return rejectNoSession();

                    $log.debug('Session.cancelRender session', sessionId, ', scene', sceneId);
                    return $http.delete('/api/session/' + _sessionId + '/' + sceneId);
                };

                that.requestNewStream = function(sceneId) {
                     if (!hasSession()) return rejectNoSession();

                   $log.debug('Session.requestNewStream session', sessionId, ', [scene', sceneId, ']');
                    var sceneId = sceneId || '';
                    return $http.get('/api/session' + _sessionId + '/' + sceneId);
                };


                //////////////////////////////////////
                // Private methods                  //
                //////////////////////////////////////

                var hasEpisode = function() {
                    return _episode instanceof Episode;
                };

                var hasSession = function() {
                    return _sessionId === undefined;
                };

                var rejectNoSession = function() {
                    $log.debug('Session not open. Rejecting request');
                    return resolveRejection('Session not open');
                };

                var resolveRejection = function(reason) {
                    var deferred = $q.defer();
                    deferred.reject(reason);

                    return deferred.promise;
                };
            };

            return SessionConstructor;

        }]);

})();