angular.module('firebase.config', [])
  .constant('FBURL', 'https://sfeircamp.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['google'])

  .constant('loginRedirectPath', '/login');
