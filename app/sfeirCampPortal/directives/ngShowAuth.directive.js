(function() {
  'use strict';
/**
 * @ngdoc function
 * @name sfeirCampPortalApp.directive:ngShowAuth
 * @description
 * # ngShowAuthDirective
 * A directive that shows elements only when user is logged in. It also waits for Auth
 * to be initialized so there is no initial flashing of incorrect state.
 */
  angular.module('sfeirCampPortalApp.directives')
    .directive('ngShowAuth', ['Auth', '$timeout', ngShowAuthDirective])
    ;

    function ngShowAuthDirective(Auth, $timeout) {

    return {
      restrict : 'A',
      link     : function(scope, el) {
        el.addClass('ng-cloak'); // hide until we process it

        function update() {
          // sometimes if ngCloak exists on same element, they argue, so make sure that
          // this one always runs last for reliability
          $timeout(function () {
            el.toggleClass('ng-cloak', !Auth.$getAuth());
          }, 0);
        }

        Auth.$onAuth(update);
        update();
      }
    };
  }
})();