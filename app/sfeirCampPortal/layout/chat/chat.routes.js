(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.chat')
    .config(['$stateProvider', chatRoutes]);

  function chatRoutes($stateProvider) {
    $stateProvider.state('sfeirCampPortal.chat', {
      url         : '/chat',
      templateUrl : 'sfeirCampPortal/layout/chat/chat.tpl.html',
      controller  : 'ChatController'
    });
  }
})();
