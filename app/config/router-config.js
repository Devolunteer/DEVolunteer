'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.when('' , '/join#signup');
  // $urlRouterProvider.when('/' , '/#!');
  // $urlRouterProvider.when('/signup' , '/signup');
  // $urlRouterProvider.when('/' , '/join');


  let states = [
    {
      name: 'partners',
      url: '/partners',
      template: require('../view/partners/partners.html'),
      controller: 'PartnersController',
      controllerAs: 'partnersCtrl'
    },
    {
      name: 'landing',
      url: '/',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    },
    {
      name: 'devlist',
      url: '/devlist',
      template: require('../view/devlist/devlist.html'),
      controller: 'DevlistController',
      controllerAs: 'devListCtrl'
    },
    {
      name: 'login',
      url: '/login',
      template: require('../view/loginview/loginview.html'),
      controller: 'LoginviewController',
      controllerAs: 'loginViewCtrl'
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signupview/signupview.html'),
      controller: 'SignupviewController',
      controllerAs: 'signupViewCtrl'
    },
    {
      name: 'edit',
      url: '/edit',
      template: require('../view/editview/editview.html'),
      controller: 'EditviewController',
      controllerAs: 'editViewCtrl'
    },
    {
      name: 'about-us',
      url: '/about-us',
      template: require('../view/about-us/about-us.html')
    }
    // {
    //   name: 'newprofile',
    //   url: '/newprofile',
    //   template: require('../view/newprofile/newprofile.html'),
    //   controller: 'NewprofileController',
    //   controllerAs: 'newProfileCtrl'
    // }
    // {
    //   name: 'contactDev',
    //   url: '/contact',
    //   template: require('../view/devDetails.html'),
    //   controller: 'DevDetailsController',   i'm not sure if i need this to be it's own separate thing or if i can put it in on the dev details view and then use that controller...
    //   controllerAs: 'contactDeveloperCtrl'
    // }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
