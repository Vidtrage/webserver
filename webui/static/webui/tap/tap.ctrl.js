(function() {
    'use strict';

    angular.module('vidtrage.tap', ['vidtrage.tap.video'])
        .controller('TAPController', ['$log', '$scope', function($log, $scope) {

            $scope.episodes = [{'name': 'myep',
                'source': 'http://techslides.com/demos/sample-videos/small.webm'
            }];
            $scope.ads = [{'name': 'myad',
                'source': 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
            }];
            $scope.resources = [];
            $scope.videoToPlay = [{'path': '', 'type': ''}];

            $scope.play = function(videoEntity) {
                $scope.videoToPlay = videoEntity.source;
            };


        }]);
})();