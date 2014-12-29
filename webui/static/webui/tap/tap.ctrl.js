(function() {
    'use strict';

    angular.module('vidtrage.tap', ['vidtrage.tap.video', 'vidtrage.api.session'])
        .controller('TAPController', ['$log', '$scope', 'SessionService', function($log, $scope, SessionService) {

            $scope.episodes = [
                {'name': 'myep1', 'source': 'http://techslides.com/demos/sample-videos/small.webm'},
                {'name': 'myep2', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4'},
                {'name': 'myep3', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/test7.mp4'},
                {'name': 'myep4', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/MediaCoder/MediaCoder_test2_1m10s_XVID_VBR_131kbps_480x320_25fps_AACLCv4_VBR_32kbps_Stereo_24000Hz.mp4'}
            ];
            $scope.ads = [
                {'name': 'myad1', 'source': 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'},
                {'name': 'myad2', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/QuickTime/QuickTime_test7_4m3s_MPEG4SP_CBR_96kbps_352x288_30fps_AAC-LCv4_CBR_320kbps_Stereo_48000Hz.mp4'},
                {'name': 'myad3', 'source': 'http://download.wavetlan.com/SVV/Media/HTTP/BlackBerry.mp4'},
                {'name': 'myad4', 'source': 'http://download.openbricks.org/sample/H264/h264_sintel_trailer-1080p.mp4'}
            ];

            $scope.resources = [];
            $scope.videoToPlay = [{'path': '', 'type': ''}];

            $scope.play = function(videoEntity) {
                $log.debug('TabController play video', videoEntity.source);
                $scope.videoToPlay = videoEntity.source;
            };

            var init = function() {
                $scope.episodes = SessionService.getEpisodes(0);
            };

            init();

        }]);
})();