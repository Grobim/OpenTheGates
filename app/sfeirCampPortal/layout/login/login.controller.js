(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.login')
    .controller('LoginController', ['$state', 'Auth', 'PlayerRef', 'PlayerService', LoginController])
    ;

  function LoginController($state, Auth, PlayerRef, PlayerService) {
    var _this = this;

    _this.oauthLogin = oauthLogin;

    function oauthLogin() {
      _this.err = null;
      Auth.$authWithOAuthPopup('google', {rememberMe: true}).then(_redirect, _showError);
    }

    function _redirect(authData) {
      var authUser = new PlayerRef(authData.uid);
      authUser.$loaded(function() {
        var createUser = authUser.$value === null;
        if (createUser) {
          PlayerService.createPlayer(authData);
        }
        $state.go('sfeirCampPortal.account');
      });
    }

    function _showError(err) {
      _this.err = err.message;
    }
  }

})();
