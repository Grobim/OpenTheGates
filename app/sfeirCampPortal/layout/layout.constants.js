(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout')
    .constant('headerStates', {
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
