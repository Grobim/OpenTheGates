(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.services.firebase')
    .service('PlayerService', ['PlayerRef', PlayerService])
    ;

  function PlayerService(PlayerRef) {
    return {
      createPlayer : createPlayer
    };

    function createPlayer(authData) {
      var playerData = {
        nickname   : authData.google.cachedUserProfile.name,
        pictureUrl : authData.google.cachedUserProfile.picture
      },
          playerRef = new PlayerRef(authData.uid);

      _.assign(playerRef, playerData);

      playerRef.$save();

    }
  }

})();
