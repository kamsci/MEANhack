var app = angular.module('ReuseApp', ['ui.router', 'ReuseCtrl']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'HomeCtrl'
    })
    .state('searchProduct', {
      url: '/products',
      templateUrl: 'views/searchProduct.html',
      controller: 'SearchProductCtrl'
    })
    .state('newProduct', {
      url: '/products/new',
      templateUrl: 'views/newProduct.html',
      controller: 'NewProductCtrl'
    })
    .state('showProduct', {
      url: '/products/:id',
      templateUrl: 'views/showproduct.html',
      controller: 'ShowProductCtrl'
    })
    .state('404', {
      url:'/404',
      templateUrl: 'views/404.html'
    });

    $locationProvider.html5Mode(true);
}]);
