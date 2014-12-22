(function() {
    'use strict';

    angular.module('vidtrage.tap.ctrl', [])
        .controller('TAPController', ['$log', '$scope', function($log, $scope) {

            $scope.episodes = [{'name': 'myep'}];
            $scope.ads = [{'name': 'myad'}];
            $scope.resources = [];


        }]);
});