(function() {
  'use strict';

  angular.module('sfeirCampPortalApp.layout.scores')
    .controller('ScoresController', [ScoresController])
    ;

  function ScoresController() {
    var _this = this;

    _this.hello = 'Coucou';
  }

})();
