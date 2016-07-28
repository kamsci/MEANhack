var app = angular.module('ReuseCtrls', [])

// Home Ctrl

app.controller('HomeCtrl', ['$scope', 'Product', function($scope, Product) {
  $scope.product = [];

  Recipe.query(function success(data) {
    $scope.product = data;
  }, function error(data) {
    console.log(data);
  });
}])






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
