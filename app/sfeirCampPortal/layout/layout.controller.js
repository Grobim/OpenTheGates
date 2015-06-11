(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .controller('LayoutController', ['$state', 'headerStates', LayoutController])
    ;

  function LayoutController($state, headerStates) {
    var _this = this;

    _this.goToState = goToState;
    _this.isCurrentState = isCurrentState;

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

  }

})();
