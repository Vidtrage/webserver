(function() {
    'use strict';

    angular.module('vidtrage.api.session', ['vidtrage.session'])
        .service('SessionService', ['$log', '$http', 'Episode', function($log, $http, Episode) {
        
            var sessionService = {};
            var _episodesJSON = [
                {'name': 'myep1', 'source': 'http://techslides.com/demos/sample-videos/small.webm'},
                {'name': 'myep2', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4'},
                {'name': 'myep3', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/test7.mp4'},
                {'name': 'myep4', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/MediaCoder/MediaCoder_test2_1m10s_XVID_VBR_131kbps_480x320_25fps_AACLCv4_VBR_32kbps_Stereo_24000Hz.mp4'}
            ];

            // key: contextId as returned from server
            // value: context object

            sessionService.getEpisodes = function(userId) {
                return $http.get('/api/episodes?user=' + userId)
                    .then(function(episodesJSON) {
                        return JSONToObject(_episodesJSON, Episode);
                    }, function(errorReason) {
                        $log.error("SessionService.getEpisodes failed", errorReason);
                    });
            };

            sessionService.getAds = function(userId) {
                return $http.get('/api/ads?user=' + userId)
                    .then(function(adsJSON) {
                        return JSONToObject(adsJSON, Ad);
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