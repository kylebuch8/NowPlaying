'use strict';

describe('Directive: poster', function () {

  // load the directive's module
  beforeEach(module('NowPlayingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poster></poster>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the poster directive');
  }));
});
