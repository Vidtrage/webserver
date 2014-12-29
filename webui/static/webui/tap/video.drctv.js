(function() {
    'use strict';

    angular.module('vidtrage.tap.video', [])
        .directive('tapVideo', ['$log', function($log) {
            return {
                restrict: 'E',
                template: '<video controls autoplay></video>',
                replace: true,
                scope: {
                    source: '='
                },
                link: function($scope, videoElement, attributes) {


                    $scope.$watch('source', function(newSource) {
                        changeVideoSource(newSource);
                    });

                    var changeVideoSource = function(source) {
                        videoElement.attr('src', source);
                    };
                }
            }
        }]);
})();