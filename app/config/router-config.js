'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.when('' , '/join#signup');
  // $urlRouterProvider.when('/' , '/join#signup');
  // $urlRouterProvider.when('/signup' , '/signup');
  // $urlRouterProvider.when('/' , '/join');


  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
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
      controllerAs: 'devlistCtrl'
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
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
