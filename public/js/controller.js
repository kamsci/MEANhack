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




// New Product Ctrl
