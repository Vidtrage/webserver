(function() {
    'use strict';

    var SessionService, $log, $httpBackend;
    describe("Session management", function() {

        beforeEach(module('vidtrage.api.session'));

        beforeEach(function() {

            inject(function(_SessionService_, _$log_, _$httpBackend_) {
                    SessionService = _SessionService_;
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

            // Episodes should be listed and managed once, for multiple contexts
            describe("Episodes", function() {

                it("should get a list of episodes for a given user", function() {
                    $httpBackend.expectGET('api/episodes?user=Ayelet').respond([{}]); //TODO: Fill the response
                    $httpBackend.flush();

                    expect(SessionService.getEpisodes('Ayelet').toEqual(jasmine.any(Episode)));
                });

            });

            // Ads should be listed and managed once for multiple contexts
            describe("Ads", function() {

                it("should get a list of ads for a given user", function() {
                    $httpBackend.expectGET('api/ads?user=Ayelet').respond([]);
                    $httpBackend.flush();

                    expect(SessionService.getAds('Ayelet').toEqual(jasmine.any(Array)));
                });

                it("should have Ad objects in the list", function() {
                    $httpBackend.expectGET('api/ads?user=Ayelet').respond([{}]); // TODO: Fill the response
                    $httpBackend.flush();

                    expect(SessionService.getAds('Ayelet').toEqual(jasmine.any(Ad)));
                })
            });

            // Pairing is manged in the context!
            // There may be multiple registered context objects (pairing setups)
            describe("Session", function() {
                it("should open a new session", function() {

                });

                it("should close an existing session", function() {

                });

                it("should pair (render) a list of resources and their ads", function() {

                });

                it("should cancel a render request", function() {

                });

                it("should request to stream a session", function() {

                });
            });

    });
})();