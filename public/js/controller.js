// Home Ctrl

var app = angular.module('RecipeCtrls', ['RecipeServices'])
app.controller('HomeCtrl', ['$scope', 'Recipe', function($scope, Recipe) {
  $scope.recipes = [];





// Search Ctrl





// Show Product Ctrl
app.controller('ShowProductCtrl', ['$scope' '$stateParams', 'Product', function($scope, $stateParams, Product) {
  $scope.product = {};
  Product.get({id: $stateParams.id}, function success(data) {
    $scope.product=data;
    console.log($scope.product);
  }, function error(data) {
    console.log(data);
  });
}]);



// New Product Ctrl
