(function() {
  'use strict';
  /**
   * @ngdoc function
   * @name sfeirCampPortalApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Manages authentication to any active providers.
   */
  angular.module('sfeirCampPortalApp')
    .controller('LoginCtrl', LoginCtrl)
    ;

  function LoginCtrl($scope, Auth, $location) {
      $scope.oauthLogin = function(provider) {
        $scope.err = null;
        Auth.$authWithOAuthPopup(provider, {rememberMe: true}).then(redirect, showError);
      };

      $scope.anonymousLogin = function() {
        $scope.err = null;
        Auth.$authAnonymously({rememberMe: true}).then(redirect, showError);
      };

      

      function redirect() {
        $location.path('/account');
      }

      function showError(err) {
        $scope.err = err;
      }


    }
})();
