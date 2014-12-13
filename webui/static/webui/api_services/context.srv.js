(function() {
    'use strict';

    angular.module('vidtrage.api.context', [])
        .service('ContextService', ['$log', '$http', function($log, $http) {
        
            var contextService = {};

            // key: contextId as returned from server
            // value: context object
            contextsList = {};

            /**
            * @param episode the episode object to bind to the context
            * @return contextId returned from the server.
            */
            contextService.getNewContextForEpisode = function(episode) {
                return requestNewContext.then(function(contextId) {
                    return contextId;
                }, function(reason) {
                    $log.error('ContextService.requestNewContext failed', reason);
                    return undefined;
                });
            };

            contextService.clearContext = function(contextId) {

            };

            contextService.pair(contextId, resource, ad) {

            };


            var requestNewContext = function(episode) {
                return $http.get('/api/newcontext?episode=' + episode.id);
            };


            return contextService;

        }]);
})();