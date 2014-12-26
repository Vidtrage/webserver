(function() {
    'use strict';

    angular.module('vidtrage.tap.video', [])
        .directive('tapVideo', ['$log', function($log) {
            return {
                restrict: 'E',
                template: '<video controls></video>',
                replace: true,
                scope: {
                    sources: '='
                },
                link: function($scope, videoElement, attributes) {


                    $scope.$watch('sources', function(newSources) {
                        if (!Array.isArray(newSources)) {
                            $log.error("tapVideo directive sources is not an array", newSources);
                            return;
                        }

                        clearControlSources();
                        newSources.forEach(function(source) {
                            addSourceToVideo(source);
                        });
                    });

                    var clearControlSources = function() {
                        videoElement.children().remove();
                    };

                    var addSourceToVideo = function(source) {
                        if (!angular.isObject(source) || !angular.isString(source.path) || !angular.isString(source.type)) {
                            $log.error('tapVideo directive sources contains invalid source', source);
                            return null;
                        }

                        var sourceElement = angular.element('<source />');
                        sourceElement.attr('src', source.path);
                        sourceElement.attr('type', source.type);
                        videoElement.append(sourceElement);

                        return sourceElement;
                    };
                }
            }
        }]);
})();