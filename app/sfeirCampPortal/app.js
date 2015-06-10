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

    'firebase.ref',
    'firebase.services',

    'sfeirCampPortalApp.filters',
    'sfeirCampPortalApp.directives',
    'sfeirCampPortalApp.layout'
    ]);
})();
