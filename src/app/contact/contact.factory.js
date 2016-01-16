(function() {
  'use strict';

  angular
    .module('sampleApp')
    .factory('Contact', ContactFactory);

  /** @ngInject */
  function ContactFactory() {
	  var factory = {};
	  
	  factory.submit = function (contactForm) {
		  
	  }
	  
	  return factory;
  }
})();
