(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.services.firebase')
    .factory('SfeirCampRef', ['$window', 'FBURL', SfeirCampRefFactory])
    .factory('PlayerRef', ['$firebaseObject', 'SfeirCampRef', PlayerRefFactory])
    .factory('Auth', ['$firebaseAuth', 'SfeirCampRef', AuthFactory])
  ;

  function SfeirCampRefFactory($window, FBURL) {
    return new $window.Firebase(FBURL);
  }

  function AuthFactory($firebaseAuth, SfeirCampRef) {
    return $firebaseAuth(SfeirCampRef);
  }

  function PlayerRefFactory($firebaseObject, SfeirCampRef) {
    return function(playerId) {
      return $firebaseObject(SfeirCampRef.child('users/' + playerId));
    };
  }

})();
