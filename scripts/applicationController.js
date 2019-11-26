angular
  .module("app")
  .controller("applicationController", function($scope, $location) {
    $scope.goTo = function(url) {
      $location.url(url);
    };
  });
