(function() {
    'use strict';

    angular.module('vidtrage.tap', [])
        .controller('TAPController', ['$log', '$scope', function($log, $scope) {

            $scope.episodes = [{'name': 'myep',
                'source': {
                    'path': 'http://techslides.com/demos/sample-videos/small.webm',
                    'type': 'video/webm'
                }
            }];
            $scope.ads = [{'name': 'myad',
                'source': {
                    'path': 'http://techslides.com/demos/sample-videos/small.webm',
                    'type': 'video/webm'
                }
            }];
            $scope.resources = [];
            $scope.videoToPlay = {'path': '', 'type': ''};

            $scope.play = function(videoEntity) {
                $scope.videoToPlay = videoEntity.source;
            };


        }]);
})();