(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name sfeirCampPortalApp
   * @description
   * # sfeirCampPortalApp
   *
   * Main module of the application.
   */
  angular.module('sfeirCampPortalApp', [
    'ui.router',
    'firebase',

    'sfeirCampPortalApp.filters',
    'sfeirCampPortalApp.services',
    'sfeirCampPortalApp.directives',
    'sfeirCampPortalApp.layout'
    ]);
})();
