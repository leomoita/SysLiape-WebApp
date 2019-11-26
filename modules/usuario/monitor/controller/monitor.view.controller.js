(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("monitorViewController", function(
    $scope,
    $location,
    $routeParams,
    monitorService
  ) {
    $scope.monitor = {
      nome: undefined,
      admin: undefined,
      login: undefined
    };

    $scope.cancel = cancel;

    function cancel() {
      $location.url("/usuario/monitor");
    }

    function load() {
      monitorService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.monitor = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
