(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .constant('headerStates', {
      'sfeirCampPortal.play'  : {
        label : 'Play',
        auth  : true
      },
      'sfeirCampPortal.scores'  : {
        label : 'Scores'
      },
      'sfeirCampPortal.chat'    : {
        label : 'Chat',
        auth  : true
      },
      'sfeirCampPortal.login'   : {
        label : 'Login',
        auth  : false
      },
      'sfeirCampPortal.account' : {
        label : 'Account',
        auth  : true
      }
    })
  ;

})();
