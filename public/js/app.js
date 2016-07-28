var app = angular.module('ReuseApp', ['ui.router', 'ngResource']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/main.html',
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

app.controller('HomeCtrl', ['$scope', 'Product', function($scope, Product) {
  $scope.product = [];

  Product.query(function success(data) {
    $scope.products = data;
  }, function error(data) {
    console.log(data);
  });
 }]);

app.controller('ShowProductCtrl', ['$scope', '$stateParams', 'Product', function($scope, $stateParams, Product) {
  $scope.product = {};
  console.log($stateParams.id);
  Product.get({id: $stateParams.id}, function success(data) {
    $scope.product=data;
    console.log(data);
  }, function error(data) {
    console.log(data);
  });
}]);


app.factory('Product', ['$resource', function($resource) {
  return $resource('/api/products/:id');
}]);
