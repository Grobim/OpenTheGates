(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .controller('LayoutController', ['$state', 'headerStates', 'Auth', LayoutController])
    ;

  function LayoutController($state, headerStates, Auth) {
    var _this = this;

    _this.goToState = goToState;
    _this.isCurrentState = isCurrentState;
    _this.userHasAuthRights = userHasAuthRights;

    (function init() {

      _this.headerStates = _.cloneDeep(headerStates);

    })();

    function goToState(state) {
      if (!$state.is(state)) {
        $state.go(state);
      }
    }

    function isCurrentState(stateName) {
      return $state.includes(stateName);
    }

    function userHasAuthRights(state) {
      if (_.isBoolean(state.auth)) {
        var authData = Auth.$getAuth();
        if (authData) {
          return state.auth === true;
        } else {
          return state.auth === false;
        }
      }
      return true;
    }

  }

})();
