(function() {
  'use strict';

  angular
    .module('sampleApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
	  .state("Login", {
		  url: "/",
		  templateUrl: "app/login/index.html",
		  controller: "LoginCtrl",
		  controllerAs: "loginCtrl",
		  authenticate: false
	  })
	  .state("about", {
		  url: "/about",
		  templateUrl: "app/about/index.html",
		  controller: "AboutCtrl",
		  controllerAs: "aboutCtrl",
		  authenticate: true
	  })
	  .state("contact", {
		  url: "/contact",
		  templateUrl: "app/contact/index.html",
		  controller: "ContactCtrl",
		  controllerAs: "contactCtrl",
		  authenticate: true
	  })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
		authenticate: true
      });

    $urlRouterProvider.otherwise('/');
  }

})();
