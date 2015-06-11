(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.login')
    .config(['$stateProvider', loginRoutes])
    ;

  function loginRoutes($stateProvider) {
    $stateProvider.state('sfeirCampPortal.login', {
      url          : '/login',
      templateUrl  : 'sfeirCampPortal/layout/login/login.tpl.html',
      controller   : 'LoginController',
      controllerAs : 'loginCtrl'
    });
  }

})();
