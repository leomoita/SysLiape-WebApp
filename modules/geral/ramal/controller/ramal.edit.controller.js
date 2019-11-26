(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("ramalEditController", function(
    $scope,
    $location,
    $routeParams,
    ramalService
  ) {

    $scope.ramal = {
      id: undefined,
      departamento: undefined,
      numero: undefined,
      nome: undefined
    };

    $scope.update = update;
    $scope.cancel = cancel;

    function update(ramal) {
      ramalService
        .update($routeParams.id, ramal)
        .then(function(retorno) {
          alert("Ramal alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/outros/ramal");
    }

    function load() {
      ramalService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.ramal = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
