var app = angular.module('pony', []);
app.controller('Controller', Controller);
Controller.$inject = ['$http', '$scope'];

function Controller($http, $scope){
  $scope.ponies = [];
  $http
    .get('/api')
    .then(function(response){
      $scope.ponies = response.data;
    }, function(error){
      alert('Error fetching data.');
    });
}
