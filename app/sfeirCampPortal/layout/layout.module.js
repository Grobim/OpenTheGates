(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout', [
    'ui.router',

    'sfeirCampPortalApp.layout.chat',
    'sfeirCampPortalApp.layout.scores',
    'sfeirCampPortalApp.layout.login',
    'sfeirCampPortalApp.layout.account'
  ]);
})();
