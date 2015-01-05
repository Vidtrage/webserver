(function() {
    'use strict';

    angular.module('vidtrage.tap', ['vidtrage.tap.video', 'vidtrage.api.session'])
        .controller('TAPController', ['$log', '$scope', 'SessionService', function($log, $scope, SessionService) {

            $scope.resources = [];
            $scope.videoToPlay = [{'path': '', 'type': ''}];

            $scope.play = function(videoEntity) {
                $log.debug('TabController play video', videoEntity.source);
                $scope.videoToPlay = videoEntity.source;
            };

            var init = function() {
                SessionService.getEpisodes(0)
                    .then(function(episodes) {
                        $scope.episodes = episodes;
                    });
                SessionService.getAds(0)
                    .then(function(ads) {
                        $scope.ads = ads;
                    });
            };

            init();

        }]);
})();