'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.when('' , '/join#signup');
  // $urlRouterProvider.when('/' , '/join#signup');
  // $urlRouterProvider.when('/signup' , '/signup');
  $urlRouterProvider.when('/' , '/login');


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
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    }
  ];

  states.forEach( state => {
    console.log('STATE', state);
    $stateProvider.state(state);
  });
}
