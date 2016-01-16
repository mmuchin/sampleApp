(function() {
  'use strict';

  angular
    .module('sampleApp')
    .factory('Login', LoginFactory);

  /** @ngInject */
  function LoginFactory() {
	  var factory = {};
	  var isAuthenticated = false;
	  
	  factory.attemptLogin = function (login, password) {
		  if(!login || !password) {
			  isAuthenticated = false;
			  return isAuthenticated;
		  }
		  
		  if(login === "user" && password === "secret") {
			  isAuthenticated = true;
			  return isAuthenticated;
		  } else {
			  isAuthenticated = false;
			  return isAuthenticated;
		  }
	  }
	  
	  factory.isAuthenticated = function () {
		  return isAuthenticated;
	  };
	  return factory;
  }
})();
