'use strict';

describe('Controller: GettingStartedCtrl', function () {

  // load the controller's module
  beforeEach(module('angularProjectApp'));

  var GettingStartedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GettingStartedCtrl = $controller('GettingStartedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GettingStartedCtrl.awesomeThings.length).toBe(3);
  });
});
