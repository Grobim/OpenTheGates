(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.account')
    .config(['$stateProvider', accountRoutes])
  ;

  function accountRoutes($stateProvider) {

    $stateProvider.state('sfeirCampPortal.account', {
      url          : '/account',
      templateUrl  : 'sfeirCampPortal/layout/account/account.tpl.html',
      controller   : 'AccountController',
      controllerAs : 'accountCtrl'
    });

  }

})();
