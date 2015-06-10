(function() {
  'use strict';

  angular.module('firebase.ref')
    .factory('SfeirCampRef', ['$window', 'FBURL', SfeirCampRefFactory])
    .factory('Auth', ['$firebaseAuth', 'SfeirCampRef', AuthFactory])
  ;

  function SfeirCampRefFactory($window, FBURL) {
    return new $window.Firebase(FBURL);
  }

  function AuthFactory($firebaseAuth, SfeirCampRef) {
    return $firebaseAuth(SfeirCampRef);
  }

})();
