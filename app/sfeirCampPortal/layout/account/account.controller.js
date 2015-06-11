(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.account')
    .controller('AccountController', ['$state', 'PlayerRef', 'Auth', AccountController])
    ;

  function AccountController($state, PlayerRef, Auth) {
    var _this = this,
        authData = Auth.$getAuth();

    _this.logout = logout;

    if (authData) {
      _this.player = new PlayerRef(authData.uid);
    }

    function logout() {
      Auth.$unauth();
      _this.player = undefined;
      $state.go('sfeirCampPortal.login');
    }
  }

})();
