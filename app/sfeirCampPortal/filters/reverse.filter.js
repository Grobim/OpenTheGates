(function() {'use strict';

  angular.module('sfeirCampPortalApp.filters')
    .filter('reverse', reverseFilter)
    ;

  function reverseFilter() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
  }
})();