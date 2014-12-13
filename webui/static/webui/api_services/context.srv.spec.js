(function() {
    'use strict';

    var ContextService, $log, $httpBackend;
    describe("Context", function() {

        beforeEach(module('vidtrage.api.context'));

        beforeEach(function() {

            inject(function(_ContextService_, _$log_, _$httpBackend_) {
                    ContextService = _ContextService_;
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

                    expect(ContextService.getEpisodes('Ayelet').toEqual(jasmine.any(Episode)));
                });

                it("should have Episode objects in the list", function() {

                })
            });

            // Ads should be listed and managed once for multiple contexts
            describe("Ads", function() {

                it("should get a list of ads for a given user", function() {
                    $httpBackend.expectGET('api/ads?user=Ayelet').respond([]);
                    $httpBackend.flush();

                    expect(ContextService.getAds('Ayelet').toEqual(jasmine.any(Array)));
                });

                it("should have Ad objects in the list", function() {
                    $httpBackend.expectGET('api/ads?user=Ayelet').respond([{}]); // TODO: Fill the response
                    $httpBackend.flush();

                    expect(ContextService.getAds('Ayelet').toEqual(jasmine.any(Ad)));
                })
            });

            // Pairing is manged in the context!
            // There may be multiple registered context objects (pairing setups)
            describe("Context", function() {
                it("should pair Ad to Episode resource", function() {

                });

            });

    });
})();