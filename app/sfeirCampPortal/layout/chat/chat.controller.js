(function() {
  'use strict';
/**
 * @ngdoc function
 * @name sfeirCampPortalApp.layout.chat.controller:ChatController
 * @description
 * # ChatController
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('sfeirCampPortalApp.layout.chat')
  .controller('ChatController', ['$scope', '$state', '$firebaseArray', '$timeout', 'ChatRef', ChatController])
;

  function ChatController($scope, $state, $firebaseArray, $timeout, ChatRef) {
    var _this = this;
    
    _this.addMessage = addMessage;

    _this.messages = $firebaseArray(ChatRef.$ref().child('messages').limitToLast(15));

    $scope.layoutCtrl.resetMessages();

    _this.messages.$loaded().catch(_alert);

    function addMessage() {
      if(_this.newMessage) {

        _this.messages.$add({
          text : _this.newMessage
        }).catch(_alert);

        _this.newMessage = null;
      }
    }

    function _alert(msg) {
      _this.err = msg;
      $timeout(function() {
        _this.err = null;
      }, 5000);
    }
  }
})();
