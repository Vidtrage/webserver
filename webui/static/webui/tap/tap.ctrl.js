(function() {
    'use strict';

    angular.module('vidtrage.tap', ['vidtrage.tap.video'])
        .controller('TAPController', ['$log', '$scope', function($log, $scope) {

            $scope.episodes = [{'name': 'myep',
                'sources': [{
                    'path': 'http://techslides.com/demos/sample-videos/small.webm',
                    'type': 'video/webm'
                }]
            }];
            $scope.ads = [{'name': 'myad',
                'sources': [{
                    'path': 'http://techslides.com/demos/sample-videos/small.webm',
                    'type': 'video/webm'
                }]
            }];
            $scope.resources = [];
            $scope.videoToPlay = [{'path': '', 'type': ''}];

            $scope.play = function(videoEntity) {
                $scope.videoToPlay = videoEntity.sources;
            };


        }]);
})();