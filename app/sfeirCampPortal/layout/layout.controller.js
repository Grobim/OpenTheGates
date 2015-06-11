(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .controller('LayoutController', ['$state', '$firebaseArray', '$scope', 'headerStates', 'Auth', 'ChatRef', LayoutController])
    ;

  function LayoutController($state, $firebaseArray, $scope, headerStates, Auth, ChatRef) {
    var _this = this;

    _this.goToState = goToState;
    _this.isCurrentState = isCurrentState;
    _this.userHasAuthRights = userHasAuthRights;
    _this.newMessage = newMessage;
    _this.resetMessages = resetMessages;

    (function init() {

      _this.headerStates = _.cloneDeep(headerStates);

      var messages = $firebaseArray(ChatRef.$ref().child('messages'));

      messages.$loaded(function() {

        messages.$watch(function (event) {
          if (event.event === 'child_added' && !$state.includes('sfeirCampPortal.chat')) {
            $scope.layoutCtrl.newMessage();
          }
        });

      });

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

    function newMessage(incr) {
      var increment = incr || 1,
          current = _this.headerStates['sfeirCampPortal.chat'].args || 0;
      _this.headerStates['sfeirCampPortal.chat'].args = current + increment;
    }

    function resetMessages() {
      delete _this.headerStates['sfeirCampPortal.chat'].args;
    }

  }

})();
