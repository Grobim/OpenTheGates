(function() {
  'use strict';

  angular.module('sfeirCampPortalApp')
    .config(['$stateProvider', '$urlRouterProvider', sfeirCampPortalRoutes]);

  function sfeirCampPortalRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/sfeirCampPortal/scores');

  }
})();
