(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.scores')
    .config(['$stateProvider', scoresRoutes]);

  function scoresRoutes($stateProvider) {

    $stateProvider.state('sfeirCampPortal.scores', {
      url          : '/scores',
      templateUrl  : 'sfeirCampPortal/layout/scores/scores.tpl.html',
      controller   : 'ScoresController',
      controllerAs : 'scoresCtrl'
    });

  }

})();
