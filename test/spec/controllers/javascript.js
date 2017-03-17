'use strict';

describe('Controller: JavascriptCtrl', function () {

  // load the controller's module
  beforeEach(module('angularProjectApp'));

  var JavascriptCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JavascriptCtrl = $controller('JavascriptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JavascriptCtrl.awesomeThings.length).toBe(3);
  });
});
