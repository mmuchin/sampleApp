(function() {
  'use strict';

  angular
    .module('sampleApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, Login) {
	  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		  
		  console.log("to state", toState);
		  console.log("status ", Login.isAuthenticated());
		if (toState.authenticate && !Login.isAuthenticated()){
			 // User isn’t authenticated
			 $state.transitionTo("Login");
			 event.preventDefault(); 
		}
	});
	
    $log.debug('runBlock end');
  }

})();
