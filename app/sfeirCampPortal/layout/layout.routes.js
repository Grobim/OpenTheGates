(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .config(['$stateProvider', layoutRoutes])
    ;

  function layoutRoutes($stateProvider) {

    $stateProvider.state('sfeirCampPortal', {
      url          : '/sfeirCampPortal',
      templateUrl  : 'sfeirCampPortal/layout/layout.tpl.html',
      controller   : 'LayoutController',
      controllerAs : 'layoutCtrl'
    });

  }
})();
