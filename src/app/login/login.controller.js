(function() {
  'use strict';

  angular
    .module('sampleApp')
    .controller('LoginCtrl', LoginController);

  /** @ngInject */
  function LoginController(Login, $location) {
	  var self = this;
	
	  self.userName = "";
	  self.password = "";
	  
	  // Flag to determine if login was successful or not
	  self.loginFailed = false;
	  
	  self.onInput = function () {
		  self.loginFailed = false;
	  };
	  
	  self.doLogin = function () {
			 self.loginFailed = !Login.attemptLogin(self.userName, self.password); 
			 
			 if(self.loginFailed === false) {
				 $location.path('/home');
			 } 
	  };
	  
  }
})();
