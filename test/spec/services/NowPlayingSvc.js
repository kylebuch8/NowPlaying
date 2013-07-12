'use strict';

describe('Service: NowPlayingSvc', function () {

  // load the service's module
  beforeEach(module('NowPlayingApp'));

  // instantiate service
  var NowPlayingSvc;
  beforeEach(inject(function(_NowPlayingSvc_) {
    NowPlayingSvc = _NowPlayingSvc_;
  }));

  it('should do something', function () {
    expect(!!NowPlayingSvc).toBe(true);
  });

});
