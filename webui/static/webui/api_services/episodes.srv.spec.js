(function() {
    'use strict';

    var EpisodesService, $log, $httpBackend;
    describe("Episodes", function() {

        beforeEach(module('vidtrage.api.episodes'));

        beforeEach(function() {

            inject(function(_EpisodesService_, _$log_, _$httpBackend_) {
                    EpisodesService = _EpisodesService_;
                    $log = _$log_;
                    $httpBackend = _$httpBackend_;
                });
            });

            afterEach(function() {
                // Verifies that all of the requests defined via the expect api were made
                $httpBackend.verifyNoOutstandingExpectation();

                // Verifies that there are no outstanding requests that need to be flushed.
                $httpBackend.verifyNoOutstandingRequest();
            });


            it("should get a list of episodes from the server in JSON format", function() {

            });
    });
})();